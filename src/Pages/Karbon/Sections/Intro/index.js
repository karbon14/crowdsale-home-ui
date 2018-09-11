import React from 'react'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'
import 'particles.js/particles'
import style from './style.scss'
import Component from '@reactions/component'
import { Particles } from './Helpers'
import { Counter } from './Counter'
import './Assets/overlay.png'
import './Assets/azure.png'

const updateUI = async ({ deployedContracts, setState, web3 }) => {
  const { Karbon14Crowdsale = {} } = deployedContracts
  const { methods = {} } = Karbon14Crowdsale
  const { weiRaised } = methods

  // Get Crowdsale Data

  weiRaised &&
    (await weiRaised()
      .call()
      .then(res => setState({ weiRaised: web3.utils.fromWei(res, 'ether') })))
}

const Intro = ({ getTranslation, deployedContracts = {}, web3 }) => (
  <Particles
    render={() => (
      <Component
        initialState={{
          totalSupply: 3600000000,
          openingTime: 1541040757,
          closingTime: 1556679157,
          goal: 15000,
          cap: 60000,
          weiRaised: undefined,
          rate: 30000
        }}
        deployedContracts={deployedContracts}
        didUpdate={({ props, prevProps, setState }) => {
          if (!isEqual(props.deployedContracts, prevProps.deployedContracts))
            updateUI({ deployedContracts, setState, web3 })
        }}
        render={({ state }) => (
          <div className="intro">
            <div id="particles-js" className="particles-container" />
            <div className="container">
              <div className="banner-content">
                <div className="content-left">
                  <div>
                    <h1>{getTranslation('intro.title', true)}</h1>
                    <p>{getTranslation('intro.subtitle', true)}</p>
                  </div>
                </div>

                <div className="content-right">
                  <Counter
                    from={state.openingTime}
                    to={state.closingTime}
                    cap={state.cap}
                    goal={state.goal}
                    raised={state.weiRaised}
                    total={state.totalSupply / state.rate}
                    cwowdsaleURL={process.env.CROWDSALE_URL}
                    getTranslation={getTranslation}
                    showProgress={
                      state.cap && state.goal && state.totalSupply && state.rate
                    }
                  />
                </div>
              </div>
            </div>
            <style jsx>{style}</style>
          </div>
        )}
      />
    )}
  />
)

Intro.propTypes = {
  getTranslation: PropTypes.func,
  deployedContracts: PropTypes.object,
  web3: PropTypes.object
}

export { Intro }

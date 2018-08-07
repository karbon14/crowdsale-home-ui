import React from 'react'
import PropTypes from 'prop-types'
import 'particles.js/particles'
import style from './style.scss'
import { Particles } from './Helpers'
import { Counter } from './Counter'
import './Assets/overlay.png'
import './Assets/azure.png'

const Intro = ({ getTranslation }) => (
  <Particles
    render={() => (
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
              <Counter to="2018 12 15" getTranslation={getTranslation} />
            </div>
          </div>
        </div>
        <style jsx>{style}</style>
      </div>
    )}
  />
)

Intro.propTypes = {
  getTranslation: PropTypes.func
}

export { Intro }

import React from 'react'
import 'particles.js/particles'
import style from './style.scss'
import intro from './Assets/intro.png'
import { Karbon } from '../../../../styles/core'
import { Button } from '@react-core/button'
import { Particles } from './Helpers'
import { Scroll } from '../../../../Components/Header/Helpers'
import './Assets/overlay.png'
import './Assets/azure.png'

const Intro = () => (
  <Particles
    render={() => (
      <div className="intro">
        <div id="particles-js" className="particles-container" />
        <div className="container">
          <div className="banner-content">
            <div className="content-left">
              <div>
                <h1>
                  Lorem ipsum dolor
                  <br />
                  sit amet, consectetur
                  <br />
                  adipiscing elit, sed do
                </h1>
                <p>
                  Eiusmod tempor incididunt ut labore et <br /> dolore magna
                  aliqua.
                </p>

                <Scroll
                  headerHeight={80}
                  render={({ onGoToSection }) => (
                    <Button
                      theme={Karbon}
                      label={'Token distribution'}
                      onClick={() => onGoToSection('tokens')}
                    />
                  )}
                />
              </div>
            </div>

            <div className="content-right">
              <div>
                <img src={intro} />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{style}</style>
      </div>
    )}
  />
)

export { Intro }

import React from 'react'
import 'particles.js/particles'
import style from './style.scss'
import { Particles } from './Helpers'
import { Counter } from './Counter'
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
              </div>
            </div>

            <div className="content-right">
              <Counter to="2018 12 15" />
            </div>
          </div>
        </div>
        <style jsx>{style}</style>
      </div>
    )}
  />
)

export { Intro }

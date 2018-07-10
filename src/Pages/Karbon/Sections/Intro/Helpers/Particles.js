import React from 'react'
import PropTypes from 'prop-types'
import ParticlesConfig from './ParticlesConfig'
import Component from '@reactions/component'
import 'particles.js/particles'

const Particles = ({ render }) => (
  <Component
    didMount={() => {
      const particlesJS = window.particlesJS
      particlesJS('particles-js', ParticlesConfig)
      window.dispatchEvent(new Event('resize'))
    }}
    render={() => render()}
  />
)

Particles.propTypes = {
  render: PropTypes.func.isRequired
}

export { Particles }

import React from 'react'
import PropTypes from 'prop-types'
import Component from '@reactions/component'

let _setState, _state

const onResize = () => {
  const width = window.innerWidth
  const mobileBreakpoint = _state.mobileBreakpoint || width
  const isMobile = window.innerWidth < mobileBreakpoint
  _setState({ isMobile })
}

const Resize = ({ mobileBreakpoint, render }) => (
  <Component
    initialState={{ isMobile: false, mobileBreakpoint }}
    didMount={({ setState, state }) => {
      _setState = setState
      _state = state
      window.addEventListener('resize', onResize)
    }}
    willUnmount={() => window.removeEventListener('resize', onResize)}
    render={({ state }) => <div>{render({ isMobile: state.isMobile })}</div>}
  />
)

Resize.propTypes = {
  mobileBreakpoint: PropTypes.number,
  render: PropTypes.func.isRequired
}

export { Resize }

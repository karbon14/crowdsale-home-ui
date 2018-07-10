import React from 'react'
import PropTypes from 'prop-types'
import Component from '@reactions/component'

let _setState

const onScroll = () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop
  _setState({ top })
}

const Sticky = ({ render }) => (
  <Component
    initialState={{ top: 0 }}
    didMount={({ setState }) => {
      _setState = setState
      document.addEventListener('scroll', onScroll)
    }}
    willUnmount={() => document.removeEventListener('scroll', onScroll)}
    render={({ state }) => <div>{render({ top: state.top })}</div>}
  />
)

Sticky.propTypes = {
  render: PropTypes.func.isRequired
}

export { Sticky }

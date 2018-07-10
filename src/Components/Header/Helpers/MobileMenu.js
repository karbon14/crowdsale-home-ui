import React from 'react'
import PropTypes from 'prop-types'
import Component from '@reactions/component'

let _setState, _state

const onChange = () => {
  const isOpen = _state.isOpen
  _state = { isOpen: !isOpen }
  _setState(_state)
}

const onClose = e => {
  if (e && !e.target.classList.contains('menu')) {
    _state = { isOpen: false }
    _setState(_state)
  }
}

const MobileMenu = ({ render }) => (
  <Component
    initialState={{ isOpen: false }}
    didMount={({ setState, state }) => {
      _setState = setState
      _state = state
      document.addEventListener('click', onClose)
    }}
    willUnmount={() => document.removeEventListener('click', onClose)}
    render={({ state }) => (
      <div>{render({ isOpen: state.isOpen, onChange, onClose })}</div>
    )}
  />
)

MobileMenu.propTypes = {
  render: PropTypes.func.isRequired
}

export { MobileMenu }

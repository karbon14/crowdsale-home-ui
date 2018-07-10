import React from 'react'
import noop from 'lodash/noop'
import PropTypes from 'prop-types'
import Component from '@reactions/component'
import smoothscroll from 'smoothscroll-polyfill'

let _state

const findSection = section => {
  const found = document.getElementsByClassName(section)
  if (found) return found[0]
}

const getElementOffset = el => ({
  top: el.offsetTop,
  height: el.clientHeight
})

const isSectionActive = (section = '') => {
  const sectionElement = findSection(section)
  if (sectionElement) {
    const offset = getElementOffset(sectionElement)
    const sectionStart = offset.top - _state.headerHeight
    const sectionEnd = sectionStart + offset.height
    return window.scrollY >= sectionStart && window.scrollY < sectionEnd
  }
}

const onGoToSection = (section = '') => {
  const sectionElement = findSection(section)
  if (sectionElement) {
    const offset = getElementOffset(sectionElement)
    window.scrollTo({
      top: offset.top - _state.headerHeight,
      behavior: 'smooth'
    })
    _state.onGoToSectionDone()
  }
}

const Scroll = ({ render, headerHeight, onGoToSectionDone }) => (
  <Component
    initialState={{ headerHeight, onGoToSectionDone }}
    didMount={({ state }) => {
      _state = state
      smoothscroll.polyfill()
    }}
    render={() => <div>{render({ onGoToSection, isSectionActive })}</div>}
  />
)

Scroll.propTypes = {
  render: PropTypes.func.isRequired,
  headerHeight: PropTypes.number,
  onGoToSectionDone: PropTypes.func
}

Scroll.defaultProps = {
  headerHeight: 0,
  onGoToSectionDone: noop
}

export { Scroll }

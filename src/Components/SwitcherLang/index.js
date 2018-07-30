import React from 'react'
import { Dropdown } from '../Dropdown/Dropdown'
import PropTypes from 'prop-types'
import { Switching } from '../../RenderProps/Switching'

export const SwitcherLang = ({langs, defaultLang}) => (
  <Switching initialState={{selected: defaultLang}}>
    {({onToggling, onSwitching, isOpen, selected}) => {
      return <Dropdown onToggling={onToggling} onSelect={onSwitching} selected={selected} isOpen={isOpen} data={langs} />
    }}
  </Switching>
)

Dropdown.propTypes = {
  langs: PropTypes.array,
  defaultLang: PropTypes.string,
}
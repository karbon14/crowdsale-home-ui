import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { Scroll } from '../../../../../../Components/Header/Helpers'

const Sections = ({ sections }) => (
  <ul>
    {sections.map((section, index) => (
      <Scroll
        key={index}
        headerHeight={80}
        render={({ onGoToSection }) => (
          <li>
            <a onClick={() => onGoToSection(section)}>{section}</a>
          </li>
        )}
      />
    ))}
    <style jsx>{style}</style>
  </ul>
)

Sections.propTypes = {
  sections: PropTypes.array
}

export { Sections }

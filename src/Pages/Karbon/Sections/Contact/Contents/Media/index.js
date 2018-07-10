import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import logo from './Assets/K14-Logo.svg'
import { Scroll } from '../../../../../../Components/Header/Helpers'

const Media = ({ links }) => (
  <div className="container">
    <div>
      <Scroll
        headerHeight={80}
        render={({ onGoToSection }) => (
          <a>
            <img
              src={logo}
              alt="Karbon14 Logo"
              onClick={() => onGoToSection('intro')}
            />
          </a>
        )}
      />
    </div>

    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} alt={link.name}>
            <span className={`fa ${link.icon}`} />
          </a>
        </li>
      ))}
    </ul>
    <style jsx>{style}</style>
  </div>
)

Media.propTypes = {
  links: PropTypes.array
}

export { Media }

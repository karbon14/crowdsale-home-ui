import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const Title = ({ section, title, description, theme = '' }) => (
  <div className="container">
    <div className={`title ${theme}`}>
      <div>
        <h2>{section}</h2>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
    <style jsx>{style}</style>
  </div>
)

Title.propTypes = {
  section: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  theme: PropTypes.string
}

export { Title }

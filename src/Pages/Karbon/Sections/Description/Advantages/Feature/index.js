import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const Feature = ({ img, title = '', description = '' }) => (
  <div className="feature">
    <div className="image-container">
      <img src={img} />
    </div>

    <div className="description-container">
      <h5>{title}</h5>

      <p>{description}</p>
    </div>
    <style jsx>{style}</style>
  </div>
)

Feature.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string
}

export { Feature }

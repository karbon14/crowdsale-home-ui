import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const TitleDescription = ({ title, description }) => (
  <div className="title-description">
    <h5> {title} </h5>
    <p> {description} </p>
    <style jsx>{style}</style>
  </div>
)

TitleDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  theme: PropTypes.object
}

TitleDescription.defaultProps = {
  title: '',
  description: ''
}

export { TitleDescription }

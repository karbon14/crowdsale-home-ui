import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'
import graph from './Assets/graph.png'
import { Advantages } from './Advantages'

const Description = ({ selectedLanguage, getTranslation }) => (
  <div className="description">
    <div className="container">
      <div className="banner-content">
        <div className="content-left">
          <div>
            <h2>{getTranslation('description.karbon')}</h2>
            <h1>{getTranslation('description.title', true)}</h1>

            <p className="lead">
              {getTranslation('description.subtitle', true)}
            </p>

            <p>{getTranslation('description.paragraph1')}</p>
            <p>{getTranslation('description.paragraph2')}</p>
          </div>
        </div>

        <div className="content-right">
          <div>
            <img src={graph} />
          </div>
        </div>
      </div>
    </div>

    <Advantages
      selectedLanguage={selectedLanguage}
      getTranslation={getTranslation}
    />
    <style jsx>{style}</style>
  </div>
)

Description.propTypes = {
  selectedLanguage: PropTypes.string,
  getTranslation: PropTypes.func
}

export { Description }

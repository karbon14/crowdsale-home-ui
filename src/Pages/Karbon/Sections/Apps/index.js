import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import app from './Assets/mobile-app.png'
import { Title } from '../../../../Components/Title'

const Apps = ({ getTranslation }) => (
  <div className="apps">
    <Title
      section={getTranslation('apps.section')}
      title={getTranslation('apps.title')}
      description={getTranslation('apps.description')}
    />

    <div className="container">
      <div className="description">
        <div>
          <p>{getTranslation('apps.paragraph1')}</p>

          <ul>
            <li>{getTranslation('apps.info1')}</li>
            <li>{getTranslation('apps.info2')}</li>
            <li>{getTranslation('apps.info3')}</li>
            <li>{getTranslation('apps.info4')}</li>
            <li>{getTranslation('apps.info5')}</li>
            <li>{getTranslation('apps.info6')}</li>
          </ul>
        </div>
      </div>

      <div className="phone">
        <img src={app} alt="Mobile App" />
      </div>
    </div>

    <style jsx>{style}</style>
  </div>
)

Apps.propTypes = {
  getTranslation: PropTypes.func
}

export { Apps }

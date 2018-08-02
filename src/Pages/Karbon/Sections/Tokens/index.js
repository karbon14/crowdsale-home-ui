import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { Chart } from './Chart'
import { Karbon } from '../../../../styles/core'
import { Button } from '@react-core/button'
import { Title } from '../../../../Components/Title'
import { Scroll } from '../../../../Components/Header/Helpers'

const BuyButton = getTranslation => (
  <Scroll
    headerHeight={80}
    render={({ onGoToSection }) => (
      <Button
        theme={Karbon}
        label={getTranslation('tokens.buy')}
        onClick={() => onGoToSection('tokens')}
      />
    )}
  />
)

const Tokens = ({ getTranslation }) => (
  <div className="tokens">
    <Title
      section={getTranslation('tokens.section')}
      title={getTranslation('tokens.title')}
      description={getTranslation('tokens.description')}
      theme="light"
    />

    <div className="container">
      <div className="sale">
        <div className="info-section">
          <div className="info">
            <h6>{getTranslation('tokens.info1')}</h6>
            <p>{getTranslation('tokens.info1Description')}</p>
          </div>
          <div className="info">
            <h6>{getTranslation('tokens.info2')}</h6>
            <p>{getTranslation('tokens.info2Description')}</p>
          </div>
          <div className="info">
            <h6>{getTranslation('tokens.info3')}</h6>
            <p>{getTranslation('tokens.info3Description')}</p>
          </div>

          <div className="buy">{BuyButton(getTranslation)}</div>
        </div>

        <div className="info-section">
          <div className="info">
            <h6>{getTranslation('tokens.info4')}</h6>
            <p>{getTranslation('tokens.info4Description')}</p>
          </div>
          <div className="info">
            <h6>{getTranslation('tokens.info5')}</h6>
            <p>{getTranslation('tokens.info5Description')}</p>
          </div>
          <div className="info">
            <h6>{getTranslation('tokens.info6')}</h6>
            <p>{getTranslation('tokens.info6Description')}</p>
          </div>
        </div>
      </div>

      <div className="distribution">
        <Chart
          description={getTranslation('tokens.distribution')}
          data={[
            { name: getTranslation('tokens.graphKey1'), data: 30 },
            { name: getTranslation('tokens.graphKey2'), data: 10 },
            { name: getTranslation('tokens.graphKey3'), data: 10 },
            { name: getTranslation('tokens.graphKey4'), data: 30 },
            { name: getTranslation('tokens.graphKey5'), data: 20 }
          ]}
          colors={['#00f9a5', '#e55457', '#16a4fd', '#855af4', '#e5c154']}
        />
      </div>

      <div className="buyMobile">{BuyButton(getTranslation)}</div>
    </div>
    <style jsx>{style}</style>
  </div>
)

Tokens.propTypes = {
  getTranslation: PropTypes.func
}

export { Tokens }

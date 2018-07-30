import React from 'react'
import style from './style.scss'
import { Chart } from './Chart'
import { Karbon } from '../../../../styles/core'
import { Button } from '@react-core/button'
import { Title } from '../../../../Components/Title'
import { Scroll } from '../../../../Components/Header/Helpers'

const BuyButton = () => (
  <Scroll
    headerHeight={80}
    render={({ onGoToSection }) => (
      <Button
        theme={Karbon}
        label={'Buy your tokens now'}
        onClick={() => onGoToSection('tokens')}
      />
    )}
  />
)

const Tokens = () => (
  <div className="tokens">
    <Title
      section="Tokens"
      title="Pre-Sale & Values"
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui."
      theme="light"
    />

    <div className="container">
      <div className="sale">
        <div className="info-section">
          <div className="info">
            <h6>Et dolorum fuga</h6>
            <p>Temporibus autem quibusdam</p>
          </div>
          <div className="info">
            <h6>Et harum quidem rerum</h6>
            <p>Debitis aut rerum necessitatibus</p>
          </div>
          <div className="info">
            <h6>Facilis est et expedita distinct</h6>
            <p>Eeveniet ut et voluptates</p>
          </div>

          <div className="buy">{BuyButton()}</div>
        </div>

        <div className="info-section">
          <div className="info">
            <h6>Et aut officiis</h6>
            <p>Repudiandae sint et molestiae</p>
          </div>
          <div className="info">
            <h6>Itaque earum rerum</h6>
            <p>Hic tenetur a sapiente delectus</p>
          </div>
          <div className="info">
            <h6>Ut aut reiciendis voluptatibus</h6>
            <p>Amaiores alias consequatur</p>
          </div>
        </div>
      </div>

      <div className="distribution">
        <Chart
          description="Token distribution"
          data={[
            { name: 'Itsum', data: 30 },
            { name: 'Consectetur', data: 10 },
            { name: 'Dolor', data: 10 },
            { name: 'Sit amet', data: 30 },
            { name: 'Lorem', data: 20 }
          ]}
          colors={['#00f9a5', '#e55457', '#16a4fd', '#855af4', '#e5c154']}
        />
      </div>

      <div className="buyMobile">{BuyButton()}</div>
    </div>
    <style jsx>{style}</style>
  </div>
)

export { Tokens }

import React from 'react'
import style from './style.scss'
import { Counter } from './Counter'
import { Chart } from './Chart'
import { Title } from '../../../../Components/Title'

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

      <div className="timer">
        <Counter to="2018 12 15" />
      </div>
    </div>

    <div className="container">
      <div className="distribution">
        <Chart
          description="Et harum quidem rerum facilis"
          data={[
            { name: 'Itsum', data: 30 },
            { name: 'Consectetur', data: 10 },
            { name: 'Dolor', data: 10 },
            { name: 'Sit amet', data: 30 },
            { name: 'Lorem', data: 20 }
          ]}
          colors={['#00f9a5', '#e55457', '#16a4fd', '#855af4', '#e5c154']}
        />
        <Chart
          description="Nam libero tempore, cum soluta"
          data={[
            { name: 'Lorem', data: 10 },
            { name: 'Dolor', data: 10 },
            { name: 'Sit amet', data: 15 },
            { name: 'Itsum', data: 5 },
            { name: 'Consectetur', data: 60 }
          ]}
          colors={['#2bd8ca', '#34e4bc', '#34e4bc', '#2bd8ca', '#25c5d7']}
        />
      </div>
    </div>
    <style jsx>{style}</style>
  </div>
)

export { Tokens }

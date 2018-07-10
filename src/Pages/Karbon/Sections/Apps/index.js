import React from 'react'
import style from './style.scss'
import app from './Assets/mobile-app.png'
import { Title } from '../../../../Components/Title'

const Apps = () => (
  <div className="apps">
    <Title
      section="Apps"
      title="Karbon14 Mobile App"
      description="Hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    />

    <div className="container">
      <div className="description">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exerc itation ullamco laboris nisi
            commodo consequat.
          </p>

          <ul>
            <li>Et harum quidem rerum</li>
            <li>At vero eos et accusamus et</li>
            <li>Ut aut reiciendis voluptatibus</li>
            <li>Nam libero tempore, cum soluta</li>
            <li>Sed ut perspiciatis unde omnis iste</li>
            <li>Alias consequatur aut perferendis doloribus</li>
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

export { Apps }

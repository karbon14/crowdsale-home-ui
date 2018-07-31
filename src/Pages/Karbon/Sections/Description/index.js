import React from 'react'
import style from './style.scss'
import graph from './Assets/graph.png'
import { Advantages } from './Advantages'

const Description = () => (
  <div className="description">
    <div className="container">
      <div className="banner-content">
        <div className="content-left">
          <div>
            <h2>Karbon14</h2>

            <h1>
              Ut enim ad minim veniam,
              <br />
              quis nostrud exercitation.
            </h1>

            <p className="lead">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat
              <br />
              duis aute irure dolor in
            </p>

            <p>
              Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>

        <div className="content-right">
          <div>
            <img src={graph} />
          </div>
        </div>
      </div>
    </div>

    <Advantages />
    <style jsx>{style}</style>
  </div>
)

export { Description }

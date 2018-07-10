import React from 'react'
import style from './style.scss'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom'
import './Assets/background.svg'

const NoMatch = () => (
  <div className="no-match">
    <header className="no-match__header">
      <Link to="/" className="receive-link">
        <img src={logo} alt="Karbon14 Logo" />
      </Link>

      <h1>
        <span>Oops,</span>
        <span>nothing here.</span>
      </h1>
    </header>
    <footer className="no-match__footer">
      <p>{`Sorry, we couldn't find the page you were looking for.`}</p>
    </footer>
    <style jsx>{style}</style>
  </div>
)

export { NoMatch }

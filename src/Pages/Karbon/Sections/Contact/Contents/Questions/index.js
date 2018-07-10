import React from 'react'
import style from './style.scss'

const Questions = () => (
  <div className="container">
    <p>Any question? Reach out to us and we’ll get back to you shortly.</p>

    <div className="channels">
      <ul>
        <li>
          <em className="fa fa-phone" />
          <span>+44 0123 4567</span>
        </li>

        <li>
          <em className="fa fa-envelope" />
          <span>info@react-core.com</span>
        </li>

        <li>
          <em className="fa fa-paper-plane" />
          <span>Join us on Telegram</span>
        </li>
      </ul>
    </div>
    <style jsx>{style}</style>
  </div>
)

export { Questions }

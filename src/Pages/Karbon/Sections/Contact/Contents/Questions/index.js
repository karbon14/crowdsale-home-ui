import React from 'react'
import style from './style.scss'

const Questions = () => (
  <div className="container">
    <p>Any question? Reach out to us and we’ll get back to you shortly.</p>

    <div className="channels">
      <ul>
        {/* <li>
          <em className="fa fa-phone" />
          <span>+44 0123 4567</span>
        </li> */}
        <li>
          <em className="fa fa-envelope" />
          <span>team@karbon14.com</span>
        </li>

        <li>
          <a href="https://t.me/joinchat/HCMsRlJYuvSVUir-j6A30Q" target="_blank" rel="noopener noreferrer">
            <em className="fa fa-paper-plane" />
            <span>Join us on Telegram</span>
          </a>
        </li>
      </ul>
    </div>
    <style jsx>{style}</style>
  </div>
)

export { Questions }

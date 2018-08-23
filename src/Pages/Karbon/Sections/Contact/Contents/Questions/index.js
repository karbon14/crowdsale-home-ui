import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const Questions = ({ getTranslation }) => (
  <div className="container">
    <p>{getTranslation('contact.anyQuestions')}</p>

    <div className="channels">
      <ul>
        <li>
          <em className="fa fa-envelope" />
          <span>team@karbon14.org</span>
        </li>

        <li>
          <a
            href="https://t.me/joinchat/HCMsRlJYuvSVUir-j6A30Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em className="fa fa-paper-plane" />
            <span>{getTranslation('contact.joinUs')}</span>
          </a>
        </li>
      </ul>
    </div>
    <style jsx>{style}</style>
  </div>
)

Questions.propTypes = {
  getTranslation: PropTypes.func
}

export { Questions }

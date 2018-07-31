import React from 'react'
import PropTypes from 'prop-types'
import style from './Profile.scss'

const Profile = ({ photo, name, surname, facebook, linkedin, twitter }) => (
  <div className="team-member">
    <div className="team-photo">
      <img src={photo} alt="team" />
      <a href="#" className="green-line" />
    </div>
    <div className="team-info">
      <h5 className="team-name">
        {surname} <br />
        {name}
      </h5>
      <span className="team-title"> </span>
      <ul className="team-social">
        <li>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <em className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <em className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <em className="fa fa-twitter" />
          </a>
        </li>
      </ul>
    </div>
    <style jsx>{style}</style>
  </div>
)

Profile.propTypes = {
  photo: PropTypes.any,
  name: PropTypes.string,
  surname: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string
}

Profile.defaultProps = {
  photo: '',
  name: '',
  surname: '',
  facebook: '',
  twitter: '',
  linkedin: ''
}

export { Profile }

import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const Profile = ({
  photo,
  name,
  surname,
  facebook,
  linkedin,
  twitter,
  github,
  charge,
  tech
}) => (
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
      <h6 className="team-position">
        {charge} <br />
        {tech}
      </h6>

      <span className="team-title"> </span>
      <ul className="team-social">
        {facebook ? (
          <li>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <em className="fa fa-facebook" />
            </a>
          </li>
        ) : null}
        {linkedin ? (
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <em className="fa fa-linkedin" />
            </a>
          </li>
        ) : null}
        {twitter ? (
          <li>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <em className="fa fa-twitter" />
            </a>
          </li>
        ) : null}
        {github ? (
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <em className="fa fa-github" />
            </a>
          </li>
        ) : null}
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
  linkedin: PropTypes.string,
  github: PropTypes.string,
  charge: PropTypes.string,
  tech: PropTypes.string
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

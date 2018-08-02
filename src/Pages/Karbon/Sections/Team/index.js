import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../../../Components/Title'
import { Profile } from './Profile'
import style from './style.scss'
import MemberIMG from './Assets/memberIMG'
import Anonymous from './Assets/anonymous.jpg'
import './Assets/pattern-team.png'

const Team = ({ getTranslation }) => (
  <div className="team">
    <div className="pattern">
      <Title
        section={getTranslation('team.section')}
        title={getTranslation('team.title')}
        description={getTranslation('team.description')}
        theme="light"
      />

      <div className="members">
        <Profile
          photo={MemberIMG}
          name="Natanael"
          surname="Zalazar"
          facebook="https://www.facebook.com/zalazarnatanael"
          twitter="https://twitter.com/zalazarnatanael"
          linkedin="www.linkedin.com/in/zalazarnatanael"
          github="https://github.com/zalazarnatanael"
        />
        <Profile
          photo={Anonymous}
          name="Wolverine"
          github="https://github.com/wolverinek14"
        />
        <Profile
          photo={Anonymous}
          name="Vision"
          github="https://github.com/visionk14"
        />
      </div>
    </div>
    <style jsx>{style}</style>
  </div>
)

Team.propTypes = {
  getTranslation: PropTypes.func
}

export { Team }

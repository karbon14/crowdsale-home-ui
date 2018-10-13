import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../../../Components/Title'
import { Profile } from './Profile'
import style from './style.scss'
import NatanaelIMG from './Assets/natanael-img.jpeg'
import WalterIMG from './Assets/walter-img.jpeg'
import JoseIMG from './Assets/jose-img.jpeg'
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
          photo={NatanaelIMG}
          name="Natanael"
          surname="Zalazar"
          twitter="https://twitter.com/zalazarnatanael"
          linkedin="https://www.linkedin.com/in/zalazarnatanael"
          github="https://github.com/zalazarnatanael"
          charge="CO-FOUNDER"
          tech="Senior Full-stack"
        />

        <Profile
          photo={WalterIMG}
          name="Walter"
          surname="Zalazar"
          twitter="https://twitter.com/wzalazar_"
          linkedin="https://www.linkedin.com/in/wzalazar"
          github="https://github.com/wzalazar"
          charge="CO-FOUNDER"
          tech="Blockchain Evangelist"
        />

        <Profile
          photo={JoseIMG}
          name="José Luis"
          surname="Casella"
          linkedin="https://www.linkedin.com/in/jose-luis-casella-b48b0a108/"
          github="https://github.com/jl-casella"
          charge="CO-FOUNDER"
          tech="Senior Full-stack"
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

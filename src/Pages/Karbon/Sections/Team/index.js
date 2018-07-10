import React from 'react'
import MemberIMG from './Assets/memberIMG'
import { Title } from '../../../../Components/Title'
import { Profile } from './Profile'
import style from './style.scss'
import './Assets/pattern-team.png'

const Team = () => (
  <div className="team">
    <div className="pattern">
      <Title
        section="Our Team"
        title="The Leadership Team"
        description="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
        theme="light"
      />

      <div className="members">
        <Profile photo={MemberIMG} name={'Natanael'} surname={'Zalazar'} />
      </div>
    </div>
    <style jsx>{style}</style>
  </div>
)

export { Team }

import React from 'react'
import style from './style.scss'
import { Title } from '../../../../Components/Title'
import './Assets/pattern-roadmap.png'

const Roadmap = () => (
  <div className="roadmap">
    <div className="pattern">
      <Title
        section="Roadmap"
        title="The Timeline"
        description="With help from our teams, contributors and investors these are the milestones we are looking forward to achieve."
      />
    </div>
    <style jsx>{style}</style>
  </div>
)

export { Roadmap }

import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { Title } from '../../../../Components/Title'
import { List } from './List'
import './Assets/pattern-roadmap.png'

const Roadmap = ({ getTranslation }) => (
  <div className="roadmap">
    <div className="pattern">
      <Title
        section={getTranslation('roadmap.section')}
        title={getTranslation('roadmap.title')}
        description={getTranslation('roadmap.description')}
      />
    </div>

    <List
      items={[
        {
          start: getTranslation('roadmap.option1Title'),
          description: getTranslation('roadmap.option1Description'),
          done: true
        },
        {
          start: getTranslation('roadmap.option2Title'),
          description: getTranslation('roadmap.option2Description'),
          done: true
        },
        {
          start: getTranslation('roadmap.option3Title'),
          description: getTranslation('roadmap.option3Description'),
          done: true
        },
        {
          start: getTranslation('roadmap.option4Title'),
          description: getTranslation('roadmap.option4Description')
        },
        {
          start: getTranslation('roadmap.option5Title'),
          description: getTranslation('roadmap.option5Description')
        },
        {
          start: getTranslation('roadmap.option6Title'),
          description: getTranslation('roadmap.option6Description')
        },
        {
          start: getTranslation('roadmap.option7Title'),
          description: getTranslation('roadmap.option7Description')
        },
        {
          start: getTranslation('roadmap.option8Title'),
          description: getTranslation('roadmap.option8Description')
        }
      ]}
    />
    <style jsx>{style}</style>
  </div>
)

Roadmap.propTypes = {
  getTranslation: PropTypes.func
}

export { Roadmap }

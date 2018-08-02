import React from 'react'
import style from './style.scss'
import Header from '../../Components/Header'
import { LanguageContext } from '../../Components/SwitcherLang/'
import {
  Intro,
  Description,
  Tokens,
  Apps,
  Team,
  Faq,
  Contact
} from './Sections'

const Karbon = () => (
  <LanguageContext.Consumer>
    {({ getTranslation }) => (
      <div className="karbon">
        <Header
          getTranslation={getTranslation}
          sections={[
            'description',
            'tokens',
            'apps',
            'team',
            'faq',
            'contact',
            'subscribe'
          ]}
        />
        <Intro getTranslation={getTranslation} />
        <Description getTranslation={getTranslation} />
        <Tokens getTranslation={getTranslation} />
        <Apps getTranslation={getTranslation} />
        <Team getTranslation={getTranslation} />
        <Faq getTranslation={getTranslation} />
        <Contact getTranslation={getTranslation} />
        <style jsx>{style}</style>
      </div>
    )}
  </LanguageContext.Consumer>
)

export { Karbon }

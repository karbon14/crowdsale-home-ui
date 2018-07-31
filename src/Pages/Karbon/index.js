import React from 'react'
import style from './style.scss'
import Header from '../../Components/Header'
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
  <div className="karbon">
    <Header
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
    <Intro />
    <Description />
    <Tokens />
    <Apps />
    <Team />
    <Faq />
    <Contact />
    <style jsx>{style}</style>
  </div>
)

export { Karbon }

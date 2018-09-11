import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@react-core/button'
import { Feature } from './Feature'
import style from './style.scss'
import { theme } from '@react-core/theme-karbon'
import { Title } from '../../../../../Components/Title'
import { Scroll } from '../../../../../Components/Header/Helpers'
import { DownloadWhitepaper } from '../../../../../Components/Utils'
import blockchain from './Assets/features-blockchain.png'
import token from './Assets/features-token.png'
import integration from './Assets/features-integration.png'

const Advantages = ({ getTranslation }) => (
  <div className="advantages">
    <Title
      section={getTranslation('description.whyKarbon')}
      title={getTranslation('description.whyTitle')}
      description={getTranslation('description.whySubtitle')}
    />

    <div className="features">
      <Feature
        img={blockchain}
        title={getTranslation('description.advantage1Title')}
        description={getTranslation('description.advantage1Description')}
      />
      <Feature
        img={token}
        title={getTranslation('description.advantage2Title')}
        description={getTranslation('description.advantage2Description')}
      />
      <Feature
        img={integration}
        title={getTranslation('description.advantage3Title')}
        description={getTranslation('description.advantage3Description')}
      />
    </div>

    <div className="links">
      <Button
        theme={theme}
        label={getTranslation('description.downloadWhitepaper')}
        onClick={DownloadWhitepaper}
      />
      <Scroll
        headerHeight={80}
        render={({ onGoToSection }) => (
          <Button
            theme={theme}
            label={getTranslation('description.getWhitelisted')}
            onClick={() => onGoToSection('contact')}
          />
        )}
      />
    </div>
    <style jsx>{style}</style>
  </div>
)

Advantages.propTypes = {
  getTranslation: PropTypes.func
}

export { Advantages }

import React from 'react'
import { Karbon } from '../../../../../styles/core'
import { Button } from '@react-core/button'
import { Feature } from './Feature'
import { Title } from '../../../../../Components/Title'
import { Scroll } from '../../../../../Components/Header/Helpers'
import style from './style.scss'
import blockchain from './Assets/features-blockchain.png'
import token from './Assets/features-token.png'
import integration from './Assets/features-integration.png'

const DownloadWhitepaper = ({ API_URL = process.env.API_URL }) => {
  const downloadUrl = `${API_URL}/whitepaper`
  const downloadFrame = document.createElement('iframe')
  downloadFrame.setAttribute('src', downloadUrl)
  downloadFrame.setAttribute('class', 'screenReaderText')
  document.body.appendChild(downloadFrame)
}

const Advantages = () => (
  <div className="advantages">
    <Title
      section="Why Karbon14"
      title="Competitive Advantage"
      description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    />

    <div className="features">
      <Feature
        img={blockchain}
        title="Ut enim ad minima veniam"
        description="Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
      />
      <Feature
        img={token}
        title="Quis autem vel eum iure"
        description="reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
      />
      <Feature
        img={integration}
        title="But I must explain to you"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
      />
    </div>

    <div className="links">
      <Button
        theme={Karbon}
        label="Download WHitepaper"
        onClick={DownloadWhitepaper}
      />
      <Scroll
        headerHeight={80}
        render={({ onGoToSection }) => (
          <Button
            theme={Karbon}
            label="Apply To Get Whitelisted"
            onClick={() => onGoToSection('contact')}
          />
        )}
      />
    </div>
    <style jsx>{style}</style>
  </div>
)

export { Advantages }

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

import { EthereumProvider } from './Utils/EthereumProvider'
import CrowdsaleABI from './ABIs/Crowdsale-ABI.json'
import Karbon14TokenABI from './ABIs/Karbon14Token-ABI.json'

const Karbon = () => (
  <LanguageContext.Consumer>
    {({ getTranslation }) => (
      <EthereumProvider
        contracts={[
          {
            name: 'Karbon14Crowdsale',
            ABI: CrowdsaleABI,
            address: process.env.CROWDSALE_ADDRESS
          },
          {
            name: 'Karbon14Token',
            ABI: Karbon14TokenABI,
            address: process.env.TOKEN_ADDRESS
          }
        ]}
      >
        {({ deployedContracts = {}, web3 }) => (
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
            <Intro
              getTranslation={getTranslation}
              history={history}
              deployedContracts={deployedContracts}
              web3={web3}
            />
            <Description getTranslation={getTranslation} />
            <Tokens getTranslation={getTranslation} />
            <Apps getTranslation={getTranslation} />
            <Team getTranslation={getTranslation} />
            <Faq getTranslation={getTranslation} />
            <Contact getTranslation={getTranslation} />
            <style jsx>{style}</style>
          </div>
        )}
      </EthereumProvider>
    )}
  </LanguageContext.Consumer>
)

export { Karbon }

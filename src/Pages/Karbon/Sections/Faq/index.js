import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '@react-core/theme-karbon'
import { TabView } from '@react-core/tabview'
import style from './style.scss'
import { Title } from '../../../../Components/Title'
import { TitleDescription } from './TitleDescription'

const Faq = ({ getTranslation }) => (
  <div className="faq">
    <Title
      section={getTranslation('faq.section')}
      title={getTranslation('faq.title')}
      description={getTranslation('faq.description')}
    />

    <div className="tabs">
      <TabView
        theme={theme}
        options={[
          {
            name: getTranslation('faq.tab1Name'),
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title={getTranslation('faq.tab1Title1')}
                    description={getTranslation('faq.tab1Description1')}
                  />
                  <TitleDescription
                    title={getTranslation('faq.tab1Title2')}
                    description={getTranslation('faq.tab1Description2')}
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title={getTranslation('faq.tab1Title3')}
                    description={getTranslation('faq.tab1Description3')}
                  />
                  <TitleDescription
                    title={getTranslation('faq.tab1Title4')}
                    description={getTranslation('faq.tab1Description4')}
                  />
                </div>
              </div>
            )
          },
          {
            name: getTranslation('faq.tab2Name'),
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title={getTranslation('faq.tab2Title1')}
                    description={getTranslation('faq.tab2Description1')}
                  />
                  <TitleDescription
                    title={getTranslation('faq.tab2Title2')}
                    description={getTranslation('faq.tab2Description2')}
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title={getTranslation('faq.tab2Title3')}
                    description={getTranslation('faq.tab2Description3')}
                  />
                  <TitleDescription
                    title={getTranslation('faq.tab2Title4')}
                    description={getTranslation('faq.tab2Description4')}
                  />
                </div>
              </div>
            )
          },
          {
            name: getTranslation('faq.tab3Name'),
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title={getTranslation('faq.tab3Title1')}
                    description={getTranslation('faq.tab3Description1')}
                  />
                  <TitleDescription
                    title={getTranslation('faq.tab3Title2')}
                    description={getTranslation('faq.tab3Description2')}
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title={getTranslation('faq.tab3Title3')}
                    description={getTranslation('faq.tab3Description3')}
                  />
                  <TitleDescription
                    title={getTranslation('faq.tab3Title4')}
                    description={getTranslation('faq.tab3Description4')}
                  />
                </div>
              </div>
            )
          },
          {
            name: getTranslation('faq.tab4Name'),
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title={getTranslation('faq.tab4Title1')}
                    description={getTranslation('faq.tab4Description1')}
                  />
                  <TitleDescription
                    title={getTranslation('faq.tab4Title2')}
                    description={getTranslation('faq.tab4Description2')}
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title={getTranslation('faq.tab4Title3')}
                    description={getTranslation('faq.tab4Description3')}
                  />
                </div>
              </div>
            )
          }
        ]}
      />
    </div>

    <style jsx>{style}</style>
  </div>
)

Faq.propTypes = {
  getTranslation: PropTypes.func
}

export { Faq }

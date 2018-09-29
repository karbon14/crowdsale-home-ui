import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { Title } from '../../../../Components/Title'
import {
  Media,
  Sections,
  Disclaimer,
  Form,
  Questions,
  Suscribe
} from './Contents'
import './Assets/footer.png'

const Contact = ({ getTranslation }) => (
  <div className="contact">
    <Title
      section={getTranslation('contact.section')}
      title={getTranslation('contact.title')}
    />

    <div className="info">
      <div className="left">
        <Questions getTranslation={getTranslation} />
      </div>

      <div className="right">
        <Form getTranslation={getTranslation} />
      </div>
    </div>

    <div className="footer">
      <div className="content">
        <div className="container">
          <div className="left">
            <div className="section">
              <div className="subscribe"> </div>
              <Media
                links={[
                  {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/K14crypto',
                    icon: 'fa-facebook'
                  },
                  {
                    name: 'Twitter',
                    url: 'https://twitter.com/K14crypto',
                    icon: 'fa-twitter'
                  },
                  {
                    name: 'GitHub',
                    url: 'https://github.com/karbon14',
                    icon: 'fa-github'
                  },
                  {
                    name: 'Medium',
                    url: 'https://medium.com/@karbon14',
                    icon: 'fa-medium'
                  }
                ]}
              />
            </div>

            <div className="section">
              <Suscribe getTranslation={getTranslation} />
            </div>
          </div>

          <div className="right">
            <Sections
              getTranslation={getTranslation}
              sections={[
                'description',
                'tokens',
                'apps',
                'team',
                'faq',
                'contact'
              ]}
            />
          </div>
        </div>

        <Disclaimer />
      </div>
    </div>
    <style jsx>{style}</style>
  </div>
)

Contact.propTypes = {
  getTranslation: PropTypes.func
}

export { Contact }

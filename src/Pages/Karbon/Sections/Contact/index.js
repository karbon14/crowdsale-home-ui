import React from 'react'
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

const Contact = () => (
  <div className="contact">
    <Title section="Contact" title="Get In Touch" />

    <div className="info">
      <div className="left">
        <Questions />
      </div>

      <div className="right">
        <Form />
      </div>
    </div>

    <div className="footer">
      <div className="content">
        <div className="container">
          <div className="left">
            <div className="section">
              <Media
                links={[
                  { name: 'Facebook', url: '#', icon: 'fa-facebook' },
                  { name: 'Twitter', url: '#', icon: 'fa-twitter' },
                  { name: 'Youtube', url: '#', icon: 'fa-youtube' },
                  { name: 'GitHub', url: '#', icon: 'fa-github' },
                  { name: 'Bitcoin', url: '#', icon: 'fa-bitcoin' },
                  { name: 'Medium', url: '#', icon: 'fa-medium' }
                ]}
              />
            </div>

            <div className="section">
              <Suscribe />
            </div>
          </div>

          <div className="right">
            <Sections
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

export { Contact }

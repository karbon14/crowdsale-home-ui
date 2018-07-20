import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { Karbon } from '../../styles/core'
import { Button } from '@react-core/button'
import style from './style.scss'
import logo from './Assets/K14-Logo.svg'
import { Sticky, Scroll, Resize, MobileMenu } from './Helpers'
import GithubCorner from 'react-github-corner'

const DownloadWhitepaper = ({ API_URL = process.env.API_URL }) => {
  const downloadUrl = `${API_URL}/whitepaper`
  const downloadFrame = document.createElement('iframe')
  downloadFrame.setAttribute('src', downloadUrl)
  downloadFrame.setAttribute('id', 'download-frame')
  document.body.appendChild(downloadFrame)
  setTimeout(() => {
    document.getElementById('download-frame').remove()
  }, 100)
}

const Header = ({ sections = [] }) => (
  <MobileMenu
    render={({ isOpen, onChange, onClose }) => (
      <div className={isOpen ? 'open' : ''}>
        <Resize
          mobileBreakpoint={990}
          render={({ isMobile }) => (
            <Scroll
              headerHeight={80}
              onGoToSectionDone={onClose}
              render={({ onGoToSection, isSectionActive }) => (
                <Sticky
                  render={({ top }) => (
                    <header className={`${top >= 80 ? 'sticky' : ''}`}>
                      <div className="container">
                        <div className="logo__area">
                          <a>
                            <img
                              src={logo}
                              alt="Karbon14 Logo"
                              onClick={() => onGoToSection('intro')}
                            />
                          </a>
                        </div>
                        <div className="links__area">
                          <div>
                            <ul>
                              {sections.map((section, index) => (
                                <li key={index}>
                                  <a
                                    className={
                                      isSectionActive(section) ? 'active' : ''
                                    }
                                    onClick={() => onGoToSection(section)}
                                  >
                                    {section}
                                  </a>
                                </li>
                              ))}

                              <Button
                                theme={Karbon}
                                label={'Whitepaper'}
                                type={'secondary'}
                                onClick={noop}
                              />
                            </ul>
                          </div>

                          <Button
                            theme={Karbon}
                            label={isMobile ? '' : 'Whitepaper'}
                            type={isMobile ? 'primary menu' : 'secondary'}
                            icon={isMobile ? 'fa-bars menu' : ''}
                            onClick={isMobile ? onChange : DownloadWhitepaper}
                          />
                          <GithubCorner
                            href="https://github.com/karbon14"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        </div>
                      </div>
                    </header>
                  )}
                />
              )}
            />
          )}
        />
        <style jsx>{style}</style>
      </div>
    )}
  />
)

Header.propTypes = {
  sections: PropTypes.array
}

export default Header

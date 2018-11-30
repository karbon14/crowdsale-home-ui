import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '@react-core/theme-karbon'
import { Button } from '@react-core/button'
import { DownloadWhitepaper } from '../Utils'
import style from './style.scss'
import logo from './Assets/K14-Logo.svg'
import airdrop from './Assets/airdrop.svg'
import { SwitcherLang } from '../SwitcherLang'
import { Sticky, Scroll, Resize, MobileMenu } from './Helpers'
import GithubCorner from 'react-github-corner'

const Header = ({ sections = [], selectedLanguage, getTranslation }) => (
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
                          <div className="flex-area">
                            <a>
                              <img
                                src={logo}
                                alt="Karbon14 Logo"
                                onClick={() => onGoToSection('intro')}
                              />
                            </a>
                            <div className="container-dropdown">
                              <SwitcherLang />
                            </div>
                          </div>
                        </div>
                        <div className="links__area">
                          <div>
                            <ul>
                              {sections.map((section = {}, index) => (
                                <li
                                  key={index}
                                  className={`menu-option-${section.name}`}
                                >
                                  <a
                                    href={section.href}
                                    target={section.target}
                                    rel="noopener noreferrer"
                                    className={
                                      isSectionActive(section.name)
                                        ? 'active'
                                        : ''
                                    }
                                    onClick={() =>
                                      section.action
                                        ? section.action()
                                        : onGoToSection(section.name)
                                    }
                                  >
                                    {getTranslation(`header.${section.name}`)}
                                  </a>
                                </li>
                              ))}

                              <Button
                                theme={theme}
                                label={getTranslation('header.whitepaper')}
                                type="secondary"
                                onClick={() =>
                                  DownloadWhitepaper(selectedLanguage)
                                }
                              />
                            </ul>
                          </div>

                          <div className="menu__area">
                            <a
                              target="_blank"
                              href={process.env.AIRDROP_URL}
                              rel="noopener noreferrer"
                            >
                              <img src={airdrop} alt="Airdrop" />
                            </a>

                            <Button
                              theme={theme}
                              label={
                                isMobile
                                  ? ''
                                  : getTranslation('header.whitepaper')
                              }
                              type={isMobile ? 'primary menu' : 'secondary'}
                              icon={isMobile ? 'fa-bars menu' : ''}
                              onClick={
                                isMobile
                                  ? onChange
                                  : () => DownloadWhitepaper(selectedLanguage)
                              }
                            />
                          </div>

                          <div className={isMobile ? 'hide' : ''}>
                            <GithubCorner
                              href="https://github.com/karbon14"
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          </div>
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
  sections: PropTypes.array,
  selectedLanguage: PropTypes.string,
  getTranslation: PropTypes.func
}

export default Header

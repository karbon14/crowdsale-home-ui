import React from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import Component from '@reactions/component'
import ReactHtmlParser from 'react-html-parser'
import { Dropdown } from './Dropdown'
import { Langs } from './Translations'

const LanguageContext = React.createContext({})

const LanguageProvider = ({ children }) => (
  <Component
    initialState={{
      langs: [],
      selectedLanguage: '',
      selectedTanslation: {}
    }}
    render={({ state, setState }) => {
      return (
        <LanguageContext.Provider
          value={{
            ...state,
            registerTranslations: langs => {
              setState({ langs })
            },
            toggleSelected: (selectedLanguage = {}) => {
              const { key, translation } = selectedLanguage
              setState({
                selectedLanguage: key,
                selectedTanslation: translation
              })
            },
            getTranslation: (key, parse = false) => {
              const translation = get(state.selectedTanslation, key, '')
              return parse ? ReactHtmlParser(translation) : translation
            }
          }}
        >
          {children}
        </LanguageContext.Provider>
      )
    }}
  />
)

LanguageProvider.propTypes = {
  children: PropTypes.node
}

const SwitcherLang = () => (
  <LanguageContext.Consumer>
    {context => (
      <Component
        initialState={{
          isOpen: false
        }}
        didMount={() => {
          context.registerTranslations(Langs)
          context.toggleSelected(Langs[0])
        }}
        render={({ state, setState }) => (
          <Dropdown
            onToggling={() => setState({ isOpen: !state.isOpen })}
            onSelect={s => {
              const selected = Langs.find(l => l.key === s)
              context.toggleSelected(selected)
              setState({ isOpen: false })
            }}
            data={context.langs}
            selected={context.selectedLanguage}
            isOpen={state.isOpen}
          />
        )}
      />
    )}
  </LanguageContext.Consumer>
)

SwitcherLang.propTypes = {
  langs: PropTypes.array,
  defaultLang: PropTypes.string
}

export { LanguageProvider, LanguageContext, SwitcherLang }

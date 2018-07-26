import React from 'react'
import style from './style.scss'

let dropdownMenuVisible = false
const languages = ['EN', 'ES', 'FR']
let selected = languages[0]

const select = (lang) => {
  selected = lang
}

const show = () => {
  dropdownMenuVisible = true
  document.addEventListener('click', hide)
}

const hide = () => {
  dropdownMenuVisible = false
}

const Languageswitcher = () => (
  <div className="language-switcher">
    <div className={"dropdown-container " + (dropdownMenuVisible ? "show" : "")}>
      <div className={"dropdown-display " + (dropdownMenuVisible ? "clicked": "")} onClick={show}>
        <span>{selected}</span>
        {/* <i className="fa fa-angle-down"></i> */}
      </div>
      <div className="dropdown-list">
        <div>
          {languages.map((lang, index) => (
            <div onClick={e => select(lang)} key={index}>
              <span>{lang}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style jsx>{style}</style>
  </div>
)

export { Languageswitcher }

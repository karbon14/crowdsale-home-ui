import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'

const Dropdown = ({ onToggling, onSelect, selected, data, isOpen }) => (
  <div className="dropdown">
    <div className={'dropdown-container ' + (isOpen ? 'show' : '')}>
      <div
        className={'dropdown-display ' + (isOpen ? 'clicked' : '')}
        onClick={e => onToggling(e)}
      >
        <span>{selected}</span>
        <i className="fa fa-angle-down arrow-down" />
      </div>
      <div className="dropdown-list">
        <div>
          {data.filter(value => value !== selected).map((item, index) => (
            <div
              onClick={e => {
                onSelect(e, item)
                onToggling(e)
              }}
              key={index}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style jsx>{style}</style>
  </div>
)

Dropdown.defaultProps = {
  isOpen: false
}

Dropdown.propTypes = {
  onSelect: PropTypes.function,
  selected: PropTypes.string,
  data: PropTypes.array,
  isOpen: PropTypes.boolean
}

export { Dropdown }

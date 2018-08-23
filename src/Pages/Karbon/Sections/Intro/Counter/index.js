import React from 'react'
import moment from 'moment'
import pad from 'lodash/pad'
import PropTypes from 'prop-types'
import { Button } from '@react-core/button'
import Component from '@reactions/component'
import { Karbon } from '../../../../../styles/core'
import { Scroll } from '../../../../../Components/Header/Helpers'
import style from './style.scss'

let _state, _setState, _interval

const timer = () => {
  const to = moment(_state.to, 'YYYY MM DD')
  const days = to.diff(moment.now(), 'days')
  const hours = to.subtract(days, 'days').diff(moment.now(), 'hours')
  const minutes = to.subtract(hours, 'hours').diff(moment.now(), 'minutes')
  const seconds = to.subtract(minutes, 'minutes').diff(moment.now(), 'seconds')
  _state = { ..._state, days, hours, minutes, seconds }
  _setState(_state)
}

const Counter = ({ to, getTranslation }) => (
  <Component
    initialState={{ to, days: 0, hours: 0, minutes: 0, seconds: 0 }}
    didMount={({ state, setState }) => {
      _state = state
      _setState = setState
      _interval = to && setInterval(timer, 1000)
    }}
    willUnmount={() => to && clearInterval(_interval)}
    render={({ state }) => (
      <div className="counter">
        <h6>{getTranslation('counter.start')}</h6>

        <div className="time">
          <div className="unit">
            <span className="number">{pad(state.days, 2, '0')}</span>
            <span>{getTranslation('counter.days')}</span>
          </div>

          <div className="unit">
            <span className="number">{pad(state.hours, 2, '0')}</span>
            <span>{getTranslation('counter.hours')}</span>
          </div>

          <div className="unit">
            <span className="number">{pad(state.minutes, 2, '0')}</span>
            <span>{getTranslation('counter.minutes')}</span>
          </div>

          <div className="unit">
            <span className="number last">{pad(state.seconds, 2, '0')}</span>
            <span>{getTranslation('counter.seconds')}</span>
          </div>
        </div>

        <Scroll
          headerHeight={80}
          render={({ onGoToSection }) => (
            <Button
              theme={Karbon}
              label={getTranslation('counter.join')}
              onClick={() => onGoToSection('contact')}
            />
          )}
        />
        <style jsx>{style}</style>
      </div>
    )}
  />
)

Counter.propTypes = {
  to: PropTypes.string,
  getTranslation: PropTypes.func
}

export { Counter }

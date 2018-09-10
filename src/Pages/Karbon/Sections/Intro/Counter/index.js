import React from 'react'
import moment from 'moment'
import isEqual from 'lodash/isEqual'
import padStart from 'lodash/padStart'
import noop from 'lodash/noop'
import PropTypes from 'prop-types'
import { Button } from '@react-core/button'
import Component from '@reactions/component'
import { Progress } from './Progress'
import { theme } from '@react-core/theme-karbon'
import { Scroll } from '../../../../../Components/Header/Helpers'
import style from './style.scss'

let _state, _setState, _interval

const formatDatesUTC = state => {
  return {
    from: moment.unix(state.from).utc(),
    to: moment.unix(state.to).utc(),
    now: moment.utc().subtract(3, 'hours')
  }
}

const timer = () => {
  const { from, to, now } = formatDatesUTC(_state)
  const d = from.diff(now) < 0 ? to : from

  const days = d.diff(now, 'days')
  const hours = d.subtract(days, 'days').diff(now, 'hours')
  const minutes = d.subtract(hours, 'hours').diff(now, 'minutes')
  const seconds = d.subtract(minutes, 'minutes').diff(now, 'seconds')

  if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) return

  _state = { ..._state, days, hours, minutes, seconds }
  _setState(_state)
}

const ActionButton = (label, onClick) => {
  return <Button theme={theme} label={label} onClick={onClick} />
}

const Counter = ({
  from,
  to,
  cap,
  goal,
  raised,
  total,
  cwowdsaleURL,
  showProgress = false,
  getTranslation
}) => (
  <Component
    from={from}
    to={to}
    initialState={{ from, to, days: 0, hours: 0, minutes: 0, seconds: 0 }}
    didUpdate={({ props, prevProps, state, prevState, setState }) => {
      if (!isEqual(props.from, prevProps.from)) setState({ from })
      if (!isEqual(props.to, prevProps.to)) setState({ to })

      const hasDates = state.from && state.to
      const differFrom = !isEqual(state.from, prevState.from)
      const differTo = !isEqual(state.to, prevState.to)

      if (hasDates && (differFrom || differTo)) {
        _state = state
        _setState = setState
        _interval = setInterval(timer, 1000)
        timer()
      }
    }}
    willUnmount={() => to && clearInterval(_interval)}
    render={({ state }) => {
      const { from, to, now } = formatDatesUTC(state)
      const hasStarted = state.from && from.diff(now) < 0
      const hasEnded = state.to && to.diff(now) < 0

      return (
        <div className="counter">
          {_interval && !hasStarted && !hasEnded ? (
            <h6>{getTranslation('counter.start')}</h6>
          ) : null}
          {_interval && hasStarted && !hasEnded ? (
            <h6>{getTranslation('counter.end')}</h6>
          ) : null}

          <div className="time">
            <div className="unit">
              <span className="number">{padStart(state.days, 2, '0')}</span>
              <span>{getTranslation('counter.days')}</span>
            </div>

            <div className="unit">
              <span className="number">{padStart(state.hours, 2, '0')}</span>
              <span>{getTranslation('counter.hours')}</span>
            </div>

            <div className="unit">
              <span className="number">{padStart(state.minutes, 2, '0')}</span>
              <span>{getTranslation('counter.minutes')}</span>
            </div>

            <div className="unit">
              <span className="number last">
                {padStart(state.seconds, 2, '0')}
              </span>
              <span>{getTranslation('counter.seconds')}</span>
            </div>
          </div>

          {showProgress ? (
            <Progress
              getTranslation={getTranslation}
              raisedValue={raised}
              goalValue={total}
              softCap={goal}
              hardCap={cap}
            />
          ) : null}

          {_interval && showProgress ? (
            <Scroll
              headerHeight={80}
              render={({ onGoToSection }) => {
                return hasStarted ? (
                  <a rel="noopener noreferrer" href={cwowdsaleURL}>
                    {ActionButton(getTranslation('counter.join'), noop)}
                  </a>
                ) : (
                  ActionButton(getTranslation('counter.subscribe'), () =>
                    onGoToSection('contact')
                  )
                )
              }}
            />
          ) : null}
          <style jsx>{style}</style>
        </div>
      )
    }}
  />
)

Counter.propTypes = {
  from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  goal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  raised: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cwowdsaleURL: PropTypes.string,
  showProgress: PropTypes.any,
  getTranslation: PropTypes.func
}

export { Counter }

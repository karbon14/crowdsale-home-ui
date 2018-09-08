import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const Progress = ({
  raisedValue = 0,
  goalValue = 0,
  softCap = 0,
  hardCap = 0,
  getTranslation
}) => {
  const percent = (raisedValue * 100) / goalValue
  return (
    <div className="progress">
      <div className="values">
        <div className="total">
          <h3>{`${raisedValue} ${getTranslation('counter.eth')}`}</h3>
          <p>{getTranslation('counter.raised')}</p>
        </div>
        <div className="goal">
          <h3>{`${hardCap} ${getTranslation('counter.eth')}`}</h3>
          <p>{getTranslation('counter.goal')}</p>
        </div>
      </div>

      <div className="bar">
        <div
          className="raised"
          style={{
            width: `calc(${percent}% + ${
              raisedValue && percent < 10 ? 25 : 0
            }px)`
          }}
        />

        <span
          className="soft-cap"
          style={{ left: `${(softCap * 100) / goalValue}%` }}
        >
          {getTranslation('counter.softCap')}
        </span>

        <span
          className="hard-cap"
          style={{ left: `${(hardCap * 100) / goalValue}%` }}
        >
          {getTranslation('counter.hardCap')}
        </span>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

Progress.propTypes = {
  raisedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  goalValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  softCap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hardCap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getTranslation: PropTypes.func
}

export { Progress }

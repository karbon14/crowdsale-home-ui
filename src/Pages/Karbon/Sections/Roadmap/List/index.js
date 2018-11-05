import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import Component from '@reactions/component'

let _setState, _state

const onResize = () => {
  // Save container width
  const width = document.querySelectorAll('div.roadmap .list')[0].clientWidth
  if (width !== _state.containerWidth) _setState({ containerWidth: width })

  // Reset to show defaults
  _setState({ startIndex: 0, maxRaised: false })
}

const List = ({ items = [] }) => (
  <Component
    initialState={{
      startIndex: 0,
      containerWidth: 0,
      itemsNumber: items.length,
      maxRaised: false
    }}
    didMount={({ setState, state }) => {
      _setState = setState
      _state = state
      window.addEventListener('resize', onResize)
      onResize()
    }}
    render={({ state, setState }) => {
      let itemWidth = {}
      let widthToMove = 190
      if (state.containerWidth < 720) {
        itemWidth = { width: state.containerWidth / 2 - 30 }
        widthToMove = state.containerWidth / 2
      }
      if (state.containerWidth < 400) {
        itemWidth = { width: state.containerWidth - 15 }
        widthToMove = state.containerWidth + 15
      }

      return (
        <section>
          <div className="list">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: `translate3d(-${widthToMove *
                    state.startIndex}px, 0px, 0px)`
                }}
              >
                {items.map((item = {}, index) => (
                  <div
                    className="owl-item active"
                    key={index}
                    style={itemWidth}
                  >
                    <div
                      className={`single-roadmap-alt ${
                        item.done ? 'done' : ''
                      }`}
                    >
                      <h6>{item.start}</h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="owl-nav">
              <div className="owl-prev">
                <i
                  className={`fa fa-angle-left ${
                    state.startIndex === 0 ? 'disabled' : 0
                  }`}
                  onClick={() => {
                    if (state.startIndex !== 0) {
                      setState({
                        startIndex: state.startIndex - 1,
                        maxRaised: false
                      })
                    }
                  }}
                />
              </div>
              <div className="owl-next">
                <i
                  className={`fa fa-angle-right ${
                    state.maxRaised ? 'disabled' : 0
                  }`}
                  onClick={() => {
                    const isNextToshow =
                      (state.itemsNumber - state.startIndex) * widthToMove >
                      state.containerWidth
                    if (isNextToshow && !state.maxRaised) {
                      setState({ startIndex: state.startIndex + 1 }, () => {
                        // Disable next if no next position available
                        const isNextAfter =
                          (state.itemsNumber - (state.startIndex + 1)) *
                            widthToMove >
                          state.containerWidth

                        const lastInMobile =
                          state.containerWidth < 400 &&
                          state.itemsNumber === state.startIndex + 2

                        if (!isNextAfter || lastInMobile) {
                          setState({ maxRaised: true })
                        }
                      })
                    }
                  }}
                />
              </div>
            </div>
            <style jsx>{style}</style>
          </div>
        </section>
      )
    }}
  />
)

List.propTypes = {
  items: PropTypes.array
}

export { List }

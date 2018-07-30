import React from 'react'

export class Switching extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.initialState
  }

  onSwitching = (event, selected) => {
    event.preventDefault()
    
    this.setState({
      selected,
    })
  }

  onToggling = (event) => {
    event.preventDefault()

    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return this.props.children({
      onSwitching: this.onSwitching,
      onToggling: this.onToggling,
      isOpen: this.state.isOpen,
      selected: this.state.selected,
    })
  }
}

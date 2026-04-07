import { Component } from 'react'

class ClassBasedComponents extends Component {
  state = {
    showText: false,
    changeColor: true,
    count: 0,
    changeCountStyle: false
  }

  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     showText: false
  //   }
  // }

  handleClick = () => {
    {
      this.setState({
        showText: !this.state.showText,
        changeColor: !this.state.changeColor
      })
    }
  }

  handleCount = () => {
    this.setState({ ...this.state, count: this.state.count + 1 })
  }

  componentDidMount () {
    this.setState({
      showText: !this.state.changeColor,
      changeColor: !this.state.showText
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true
      })
    }
  }

  componentWillUnmount(){}

  render () {
    console.log(this.state.showText)

    const { showText, changeColor, count, changeCountStyle } = this.state

    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? 'black' : 'beige' }}>
            Class Based Component
          </h3>
        ) : null}
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3 style={{ color: changeCountStyle ? 'blue' : 'blanchedalmond' }}>
          Count is {count}
        </h3>
      </div>
    )
  }
}

export default ClassBasedComponents

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  changeValue = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      this.setState({isSubscribe: false})
    } else {
      this.setState({isSubscribe: true})
    }
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning </p>
        {isSubscribe ? (
          <button type="button" className="button-1" onClick={this.changeValue}>
            Subscribe
          </button>
        ) : (
          <button type="button" className="button-1" onClick={this.changeValue}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome

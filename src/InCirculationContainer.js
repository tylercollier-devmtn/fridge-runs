import React from 'react'
import axios from 'axios'
import InCirculation from './InCirculation'

export default class InCirculationContainer extends React.Component {
  state = {
    errorMessage: null,
    loading: false,
    runs: []
  }

  componentDidMount() {
    this.setState({ loading: true })
    axios
      .get('/api/me/runs-by-type')
      .then(response => {
        this.setState({ runs: response.data })
      })
      .catch(error => {
        this.setState({
          errorMessage:
            'An error occurred when loading runs in circulation: ' +
            error.message
        })
      })
      .then(() => {
        this.setState({ loading: false })
      })
  }

  render() {
    const { errorMessage, loading, runs } = this.state

    if (loading) {
      return <div>Loading runs in circulation...</div>
    } else if (errorMessage) {
      return <div>{errorMessage}</div>
    }
    return <InCirculation runs={runs} />
  }
}

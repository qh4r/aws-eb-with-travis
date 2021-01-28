import React, {Component} from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes()
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({values: values.data});
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  renderSeenIndexes() {
    return this.state.seenIndexes.map(index => {
      return index.number
    })
               .join(', ');
  }

  renderValues() {
    return Object.keys(this.state.values).map(key => {
      return (
        <div key={key}>
          Index: {key} ==> {this.state.values[key]}
        </div>
      )
    })
  }


  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({index: ''});
  };

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter index</label>
          <input
            value={this.state.index}
            onChange={event => this.setState({index: event.target.value})}
            type="text"
          />
          <button>Submit</button>
        </form>
        <h3>Indexes seen:</h3>
        {this.renderSeenIndexes()}
        <h3>Calculated values:</h3>
        {this.renderValues()}
      </div>
    )
  }
}

export default Fib;

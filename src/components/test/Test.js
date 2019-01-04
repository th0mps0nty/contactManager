import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    user: ''
  };

  // Lifecycle Methods:
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          user: data.userId
        })
      );
  }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate...');
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps...');
  // }

  // getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, user } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{user}</p>
      </div>
    );
  }
}

export default Test;

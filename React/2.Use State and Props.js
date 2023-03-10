class Counter extends React.Component {
    state = { count: 0 };
  
    handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>Increment</button>
        </div>
      );
    }
  }
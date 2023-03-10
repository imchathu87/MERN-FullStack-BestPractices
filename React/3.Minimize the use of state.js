class UserList extends React.Component {
    state = { users: [] };
  
    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
  
    render() {
      return (
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }
  }
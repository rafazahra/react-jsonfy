import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data : [],
    };
  }

  componentDidMount() {
    const apiUrl = 'https://jsonfy.com/users';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => this.setState({ data: data }));
  }

  render(){
    const { data } = this.state;

    return(
      <div>
          
          <Mui.Container fixed>
                <br />
                <Mui.ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Mui.Button href="/users">User</Mui.Button>
                    <Mui.Button href="/posts">Posts</Mui.Button>
                    <Mui.Button href="/comments">Comments</Mui.Button>
                </Mui.ButtonGroup>

        <h3 align="center">Data jsonfy Users</h3>
          <table border="1" cellPadding="20">
            <tr bgcolor="#6600CC">
              <td>ID</td>
              <td>NAME</td>
              <td>USERNAME</td>
              <td>EMAIL</td>
              <td>PASSWORD</td>
              <td>AGE</td>
              <td>WEBSITE</td>
              <td>PHONE</td>
              <td>DATE ADD</td>
              <td>DATE UPD</td>
              <td>PASSWORD MD5</td>
            </tr>
            {data.map(todo =>
              <tr bgcolor="#CCFFFF" hey={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.username}</td>
                <td>{todo.email}</td>
                <td>{todo.password}</td>
                <td>{todo.age}</td>
                <td>{todo.website}</td>
                <td>{todo.phone}</td>
                <td>{todo.date_add}</td>
                <td>{todo.date_upd}</td>
                <td>{todo.password_md5}</td>
              </tr>
              )}
          </table>
          </Mui.Container>
      </div>
    );
  }
}

export default App;
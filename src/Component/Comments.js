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
    const apiUrl = 'https://jsonfy.com/comments';
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
        <h3 align="center">Data jsonfy Comments</h3>
          <table border="1" cellPadding="20">
            <tr bgcolor="#6600CC">
              <td>ID</td>
              <td>USE COM FK</td>
              <td>POS COM FK</td>
              <td>COMMENT</td>
              <td>DATE ADD</td>
              <td>DATE UPD</td>
            </tr>
            {data.map(todo =>
              <tr bgcolor="#CCFFFF" hey={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.use_com_fk}</td>
                <td>{todo.pos_com_fk}</td>
                <td>{todo.comment}</td>
                <td>{todo.date_add}</td>
                <td>{todo.date_upd}</td>
              </tr>
              )}
          </table>
          </Mui.Container>
      </div>
    );
  }
}

export default App;
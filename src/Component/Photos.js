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
    const apiUrl = 'https://jsonfy.com/photos';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => this.setState({ data: data }));
  }

  render(){
    const { data } = this.state;

    return(
      <div>
          
          <nav>
          <Mui.AppBar>
                        <Mui.Toolbar>
                        <a href="#!" class="brand-logo right">JSONFY</a>
                            <Mui.Typography>
                    <div class="nav-wrapper">
                    <ul class="left hide-on-med-and-down">
                        <li><a href="/users">Users</a></li>
                        <li><a href="/comments">Comments</a></li>
                        <li><a href="/posts">Posts</a></li>
                        <li><a href="/todos">Todos</a></li>
                        <li><a href="/albums">Albums</a></li>
                        <li><a href="/photos">Photos</a></li>
                        <li><a href="/categories">Categories</a></li>
                        <li><a href="/brands">Brands</a></li>
                        <li><a href="/items">Items</a></li>
                    </ul>
                    </div>
                    </Mui.Typography>
                    </Mui.Toolbar>
                    </Mui.AppBar>
                    </nav>

        <h3 align="center">Data jsonfy Photos</h3>
        <Mui.Container fixed>
            
          <table border="1" cellPadding="20">
            <tr bgcolor="#81c784">
              <td>ID</td>
              <td>ALB PHO FK</td>
              <td>CAPTION</td>
              <td>URL</td>
              <td>THUMBNAIL URL</td>
            </tr>
            {data.map(todo =>
              <tr hey={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.alb_pho_fk}</td>
                <td>{todo.caption}</td>
                <td>{todo.url}</td>
                <td>{todo.thumbnail_url}</td>
              </tr>
              )}
          </table>
          </Mui.Container>
      </div>
    );
  }
}

export default App;
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
    const apiUrl = 'https://jsonfy.com/items';
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
                            <Mui.Toolbar color="info">
                            <a href="#!" class="brand-logo right">JSONFY</a>
                                <Mui.Typography variant="h6">
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
        
                    


            <h3 align="center">Data jsonfy Items</h3>
            <Mui.Container fixed>
                
            <table border="1">
                <tr bgcolor="#81c784">
                <td>ID</td>
                <td>NAME</td>
                <td>DESCRIPTION</td>
                <td>WHOLESALE PRICE</td>
                <td>PRICE</td>
                <td>PHOTO URL</td>
                <td>STOCK</td>
                <td>SALES</td>
                <td>ACTIVE</td>
                <td>DATE ADD</td>
                <td>DATE UPD</td>
                <td>BRA ITE FK</td>
                </tr>
                {data.map(todo =>
                <tr hey={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>{todo.description}</td>
                    <td>{todo.wholesale_price}</td>
                    <td>{todo.price}</td>
                    <td>{todo.photo_url}</td>
                    <td>{todo.stock}</td>
                    <td>{todo.sales}</td>
                    <td>{todo.active}</td>
                    <td>{todo.date_add}</td>
                    <td>{todo.date_upd}</td>
                    <td>{todo.bra_ite_fk}</td>
                </tr>
                )}
            </table>
            </Mui.Container>
        </div>
    );
  }
}

export default App;
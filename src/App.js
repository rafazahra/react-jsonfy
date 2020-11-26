import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Users from './Component/Users';
import Posts from './Component/Posts';
import Comments from './Component/Comments';
import Albums from './Component/Albums';
import Photos from './Component/Photos';
import Todos from './Component/Todos';
import Categories from './Component/Categories';
import Brands from './Component/Brands';
import Items from './Component/Items';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/users" exact component={Users} />
        <Link path="/posts" exact component={Posts} />
        <Link path="/comments" exact component={Comments} />
        <Link path="/albums" exact component={Albums} />
        <Link path="/photos" exact component={Photos} />
        <Link path="/todos" exact component={Todos} />
        <Link path="/categories" exact component={Categories} />
        <Link path="/brands" exact component={Brands} />
        <Link path="/items" exact component={Items} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

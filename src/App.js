import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Users from './Component/Users';
import Posts from './Component/Posts';
import Comments from './Component/Comments';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/users" exact component={Users} />
        <Link path="/posts" exact component={Posts} />
        <Link path="/comments" exact component={Comments} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

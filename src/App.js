import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/Petite-Note/"><Home />
            </Route>
            <Route path="/Petite-Note/create"><Create />
            </Route>
            <Route path="/Petite-Note/notes/:id"><BlogDetails /></Route>
            <Route path="/Petite-Note/*"><NotFound /> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

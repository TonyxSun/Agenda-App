import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import TopicDetails from './TopicDetails';
import NotFound from './NotFound';
import Update from './Update';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /> 
            </Route>
            <Route exact path="/Agenda/"><Home /> 
            </Route>
            <Route path="/Agenda/create"><Create />
            </Route>
            <Route path="/Agenda/topics/edit/:id"><Update />
            </Route>
            <Route path="/Agenda/topics/:id"><TopicDetails /></Route>
            <Route path="/Agenda/*"><NotFound /> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

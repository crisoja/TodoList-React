import './App.css';
import TodoList from './features/todos/components/TodoList';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import DoneList from './features/todos/components/DoneList';
import PageNotFound from './features/todos/components/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to = "/">Go to the todo list page</Link>
          <br></br>
          <Link to = "/done">Go to the Done to do list</Link>
        </ul>
        <Switch>
          <Route exact path="/" component={TodoList}></Route>
          <Route exact path="/done" component={DoneList}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

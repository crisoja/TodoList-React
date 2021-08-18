import './App.css';
import TodoList from "./features/todos/components/TodoList";
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import DoneList from "./features/todos/components/DoneList";
import PageNotFound from "./features/todos/components/PageNotFound";


function App() {
  return (

    
    <div className="App">
      <TodoList />
      <BrowserRouter>
                <ul>
                    <Link to="/">go to todo list page</Link>
                    <Link to="/done">go to done list page</Link>
                </ul>
                <Switch>
                    <Route exact path="/" component={TodoList}></Route>
                    <Route exact path="/done" component={DoneList}></Route>
                    <Route path="*" component={PageNotFound}></Route>
                </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;

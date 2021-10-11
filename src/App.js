import './App.css';
import Header from './Components/Header';
import {Todos} from './Components/Todos';
import {AddTodo} from './Components/AddTodo';
import {Footer} from './Components/Footer';
import {About} from './Components/About';
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos")===null ) {
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title,desc) => {

    let sno = null;

    if (todos.length===0) {
      sno = 0;
    }else{

      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);

   
    // if (localStorage.getItem("todos") ===null) {
      // localStorage.setItem("todos",JSON.stringify(todos));
    // }
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]) 
 
  return (
    <div className="App">
      <Router>
        <Header title="My Todo List"/>
        <div className="container">
          <Switch>
            <Route exact path="/" render={()=>{
                return(
                  <>
                    <AddTodo addTodo={addTodo} />
                    <Todos todos={todos} onDelete={onDelete}/>
                  </>
                )
              }}>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

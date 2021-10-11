import './App.css';
import Header from './Components/Header';
import {Todos} from './Components/Todos';
import {AddTodo} from './Components/AddTodo';
import {Footer} from './Components/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title,desc) => {

    let sno = null;

    if (todos.length==0) {
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
    console.log(myTodo);
  }
 
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header title="My Todo List"/>
      <div className="container">
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React,{useState} from 'react';

// restrap
import Container from 'react-bootstrap/Container'

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos]=useState([]);

  function _handleDeleteTodo(todo, index){
    // way 1: use index in array
    // const newTodo = value.filter((_, newIndex) => index !== newIndex);
    // setValue(newTodo)

    // way 2: use todo id
    const findIndexTodo = todos.findIndex(item => item.id === todo.id);
    const newTodo = [...todos];
    newTodo.splice(findIndexTodo, 1);
    setTodos(newTodo);
  }

  function _handleAddTodo(title){
    const newTodo = {
      id: Date.now(),
      title
    }
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
        <Container>
          <h1 className='mt-3'>TodoList Functional React Hooks</h1>
          <TodoForm handleAddTodo={_handleAddTodo}/>
          <TodoList todos={todos} handleDeleteTodo={_handleDeleteTodo}/>
        </Container>
    </div>
  );
}

export default App;

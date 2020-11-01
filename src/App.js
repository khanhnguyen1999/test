import React,{useState} from 'react';
import './App.css';
import Table from './components/table'
import Add from './components/add'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
function App() {
  const [value,setValue]=useState('')
  function handleClick(todo,id){
    let index;
    for(let i =0;i<value.length;i++){
      if(i===id){
        index=i;
      }
    }
    console.log(index)
    if(index<0) return;
    const newTodo = [...value]
    newTodo.splice(index,1);
    setValue(newTodo)
  }
  function handleTodoForm(arr){
    setValue([...value,{title:arr}]);
  }
  return (
    <div className="App">
        <Container>
          <h1 className='mt-3'>TodoList Functional React Hooks</h1>
          <Add onCheck={handleTodoForm}/>
          <Table value={value} onTodoClick={handleClick}/>
        </Container>
    </div>
  );
}

export default App;

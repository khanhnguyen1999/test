import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/table'
import Add from './components/add'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
function App() {
  const [value,setValue]=useState('')
  function handleClick(todo,i){
    console.log("todo",todo)
    console.log("index ",i)
    // const index = value.findIndex(x=>console.log(x.id))
    for(let i =0;i<value.length;i++){
      if(i===i){
        index=i;
      }
    }
    if(index<0) return;
    // console.log(value)
    const newTodo = [...value]
    newTodo.splice(index,1);
    setValue(newTodo)
    // console.log("value ",value)
    // console.log("todo ",todo)
    // const filteredTask = value.filter(task => {
    //   return task.title !== todo.title
    // })
    // setValue(filteredTask)
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

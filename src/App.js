import React,{useState} from 'react';
import './App.css';
import Table from './components/table'
import Add from './components/add'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
function App() {
  const [value,setValue]=useState([]);

  function _handleDeleteTodo(todo, index){

    // way 1: use index in array
    // const newTodo = value.filter((_, newIndex) => index !== newIndex);
    // setValue(newTodo)

    // way 2: use todo id
    const findIndexTodo = value.findIndex(item => item.id === todo.id);
    const newTodo = [...value];
    newTodo.splice(findIndexTodo, 1);
    setValue(newTodo);


    // let index;
    // for(let i =0;i<value.length;i++){
    //   if(i===id){
    //     index=i;
    //   }
    // }
    // console.log(index)
    // if(index<0) return;
    // const newTodo = [...value]
    // newTodo.splice(index,1);
    // setValue(newTodo)
  }

  function handleTodoForm(title){
    const newTodo = {
      id: Date.now(),
      title
    }
    setValue([...value, newTodo]);
  }

  return (
    <div className="App">
        <Container>
          <h1 className='mt-3'>TodoList Functional React Hooks</h1>
          <Add onCheck={handleTodoForm}/>
          <Table value={value} onClick={_handleDeleteTodo}/>
        </Container>
    </div>
  );
}

export default App;

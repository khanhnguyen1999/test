import React from 'react'
import Table from 'react-bootstrap/Table'
export default function isTable({todos, handleDeleteTodo}){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.length > 0 &&
                    todos.map((todo,index)=>{
                        return (
                        <tr style={{cursor:'pointer'}} key={todo.id} onClick={() => handleDeleteTodo(todo,index)}>
                            <td>{index}</td>
                            <td>{todo.title}</td>
                        </tr>)
                    })
                }
            </tbody>
        </Table>
    )
}
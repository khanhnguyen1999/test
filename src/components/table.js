import React from 'react'
import Table from 'react-bootstrap/Table'
export default function isTable({value,onClick}){
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
                    value &&
                    value.map((value,index)=>{
                        return (
                        <tr style={{cursor:'pointer'}} key={index}
                        onClick={()=>onClick(value,index)}
                        >
                            <td>{index+1}</td>
                            <td>{value.title}</td>
                        </tr>)
                    })
                }
            </tbody>
        </Table>
    )
}
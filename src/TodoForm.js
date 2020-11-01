import React, { useState } from 'react';

// components
import Button from './components/Button';

const TodoForm = ({ handleAddTodo }) => {
    const [title, setTitle] = useState('');

    function handleChange(e){
        setTitle(e.target.value)
    }

    function onSubmit(event) {
        event.preventDefault();
        setTitle('');
        handleAddTodo(title)
    }

    return (
        <form  style={{display:'flex'}} className="mt-3 mb-3" onSubmit={onSubmit}>
            <input style={{width:'100%'}} type="text" value={title} onChange={handleChange}/>
            <Button className="ml-1" variant="danger" type="submit" name="Clear"/>
        </form>
    )
}

export default TodoForm;
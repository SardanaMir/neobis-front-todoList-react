import React, {useState} from 'react';

export const EditTodoForm = ({editTodo, task}) =>{
    const [value, setValue] = useState(task.task);

    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }

    return(
        <form className='todoForm' onSubmit={handleSubmit}>
            <div className='editWrapper fl-ai-cen'>
                <input type='text' className='todoInput' placeholder='Update task' onChange={(e) => setValue(e.target.value)} value={value}/>
                <button type='submit' className='btn-edit btn'>OK</button>
            </div>
        </form>
    )
}
// export default TodoForm;
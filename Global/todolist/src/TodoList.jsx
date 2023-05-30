import React, { useState } from 'react';
import './reset.css'
import './todolist.css'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            const isDuplicate = todos.some((todo) => todo.text === inputValue);
            if (isDuplicate) {
                alert('이미 추가된 할 일입니다.');
            } else if (inputValue.length > 20) {
                alert('할 일은 20자 이하로 입력해주세요.');
            } else {
                setTodos([...todos, { text: inputValue, checked: false }]);
            }
            setInputValue('');
        }
    };

    const handleToggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, checked: !todo.checked };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const handleDeleteAll = () => {
        setTodos([]);
    };

    return (
        <div>
            <h1> THINGS TO DO : </h1>
            <div className="add-wrap">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a todo"
                />
                <button className="btn add-btn" onClick={handleAddTodo}> Add </button>
                <button className="btn delete-all-btn" onClick={handleDeleteAll}>Delete All</button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}
                        className="list-li"
                    >
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={() => handleToggleTodo(index)}
                        />
                        <p className="list-text"> {todo.text} </p>
                        <button className="btn delete-btn"onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

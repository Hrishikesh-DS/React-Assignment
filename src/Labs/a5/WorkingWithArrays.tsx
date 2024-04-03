import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [todos, setTodos] = useState<any[]>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo: { id: any; }) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const deleteTodo = async (todo: { id: any; }) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }

    };
    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }

    };


    useEffect(() => {
        fetchTodos();
    }, []);


    return (
        <div>
            <h3>Working with Arrays</h3>
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <input className="form-control form m-1" value={todo.id} type="number"
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <input className="form-control form m-1" type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <textarea className="form-control form m-1" value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} />
            <input className="form-control form m-1" value={todo.due} type="date"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })} />
            <label>
                <input className="m-1" checked={todo.completed} type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })} />
                Completed
            </label>
            <br></br>
            <button className="btn btn-primary m-2" onClick={postTodo}> Post Todo </button>
            <button onClick={updateTodo}>
                Update Todo
            </button>
            <br></br>
            <br></br>
            <button className="btn btn-primary m-2" onClick={createTodo} >
                Create Todo
            </button>
            <button className="btn btn-success m-2" onClick={updateTitle} >
                Update Title
            </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <input className="m-1" checked={todo.completed}
                            type="checkbox" readOnly />
                        {todo.title}
                        {todo.description}
                        {todo.due}
                        <button className="btn btn-danger m-2" onClick={() => removeTodo(todo)} >
                            Remove
                        </button>
                        <button onClick={() => deleteTodo(todo)}
                            className="btn btn-danger ms-2">
                            Delete
                        </button>
                        <button className="btn btn-success m-2" onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
            <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>
            <h4>Retrieving Arrays</h4>
            <a className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>

            <a className="btn btn-primary mx-2" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <h3>Deleting from an Array</h3>
            <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <p></p>
            <h3>Updating an Item in an Array</h3>

            <a className="btn btn-primary m-2" href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a>
            <br />
            <input type="text" value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value
                })} />
            <a className="btn btn-primary m-2" href={`${API}/${todo.id}/description/${todo.description}`} >
                Update Description to {todo.description}
            </a>
            <br />
            <input type="checkbox" checked={todo.completed}
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked
                })} />
            <a className="btn btn-primary m-2" href={`${API}/${todo.id}/completed/${todo.completed}`} >
                Update Completed
            </a>
            <br />
            <h3>Filtering Array Items</h3>
            <a className="btn btn-primary" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
        </div>
    );
}
export default WorkingWithArrays;
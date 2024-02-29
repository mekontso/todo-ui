import React, { useState } from 'react'

export const ListTodoComponent = () => {

    const dummyData = [
        {
            id: 1,
            title: "Learn React",
            description: 'Learn React',
            completed: false
        },
        {
            id: 2,
            title: "Lear Spring Boot",
            description: 'Learn Spring Boot',
            completed: false
        },
        {
            id: 3,
            title: "Lear Spring Cloud",
            description: 'Learn Spring Cloud',
            completed: false
        },
        {
            id: 4,
            title: "Lear Microservices",
            description: 'Learn Microservices',
            completed: false
        }
    ]
    const [todos, setTodos] = useState(dummyData)
    return (
        <div className='container'>
            <h2 className='text-center'>List of todos</h2>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Todo title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.title}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.completed ? "YES" : "NO"}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

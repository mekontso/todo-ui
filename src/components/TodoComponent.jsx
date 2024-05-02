import React from 'react'
import { useState } from 'react'

const TodoComponent = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState("")

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Todo</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Todo title</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoComponent
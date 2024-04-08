import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div className='container'>
                        <a href='http://localhost:3000' className='navbar-brand'> Todo Mangement App</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
import React from 'react'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">B</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toogle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button className="nav-link dropdown-toggle" id="navMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a href="/" className="dropdown-item">Action</a>
                            <a href="/" className="dropdown-item">Action</a>
                            <div className="dropdown-divider"></div>
                            <a href="/" className="dropdown-item">Action</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
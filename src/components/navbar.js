import React from 'react';


export default class NavBar extends React.Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-expand-sm" >
                <a className="navbar-brand" href="#" />
                <ul className="navbar-nav" id="nav">
                <li class="nav-item active">
                    {/* per reuest of office hours here are some random links  */}
                <a className="nav-link" href="https://www.youtube.com/watch?v=CdKZrRomPg4">Watch Out!</a>
                </li>
                <li>
                <a className="nav-link" href="https://www.youtube.com/watch?v=czLYl4fM8yk">Goofy</a>
                </li>
                <li>
                <a className="nav-link" href="https://www.youtube.com/watch?v=oy-3KI2eHi4">#1</a>
                </li>
                </ul>
                
            
            </nav>
    );
    }
}
//note 
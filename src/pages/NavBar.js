import React from 'react'
import {Link} from 'react-router-dom'
const NavBarComponent = () => {
    return (
        <>
            <nav className="py-4">
                <div id="logo">
                    <h1> <Link to="index.html"><span className="fa fa-bold" aria-hidden="true"></span>ootie</Link></h1>
                </div>

                <label for="drop" className="toggle">Menu</label>
                <input type="checkbox" id="drop" />
                <ul className="menu mt-2">
                    <li><Link to="/">Home</Link></li>
                    <li className="active"><Link to="/About">About</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li>
                        {/* <!-- First Tier Drop Down --> */}
                        <label for="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                        <Link to="#">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span></Link>
                        <input type="checkbox" id="drop-2" />
                        <ul>
                            <li><Link to="/Blog">Blog</Link></li>
                            <li><Link to="/Shop">Shop Now</Link></li>
                            {/* <li><Link to="single.html">Single Page</Link></li> */}
                        </ul>
                    </li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBarComponent
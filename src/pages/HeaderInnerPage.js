import React from 'react'
import NavBarComponent from './NavBar'
const HeaderInnerHeadComponent =()=>{
    return(
        <>
            <div className="main-banner inner" id="home">
                <header className="header">
                    <div className="container-fluid px-lg-5">
                        <NavBarComponent/>   
                        {/* {alert("Header call")}   */}
                    </div>
                </header>
            
            </div>
        </>
    )
}
export default HeaderInnerHeadComponent
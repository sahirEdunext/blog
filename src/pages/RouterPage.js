import react, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeComponent from './Home'
import AboutComponent from './About'
import BlogComponent from './Blog'
import ShopComponent from './Shop'
import ContactComponent from './Contact'
import HeaderInnerHeadComponent from './HeaderInnerPage'
import FooterComponent from './Footer'
const RouterPageComponent =(props)=>{
    //var navigate = useNavigate();
    //console.log("navigate:",navigate);
    const [isHomePage, SetIsHomePage]=useState(true);
    //const currentPath=window.location.href
    useEffect(() => {
        if(window.location.href =="http://localhost:3000/"){
            SetIsHomePage(false);
        }
    }, [isHomePage])
    //console.log(currentPath)
    return(
        <>
        <Router>
            {isHomePage ? <HeaderInnerHeadComponent/> : ""}
            <Routes>
                <Route path="/" element={<HomeComponent/>}/>
                <Route path="/About" element={<AboutComponent/>} />
                <Route path="/Blog" element={<BlogComponent/>} />
                <Route path="/Shop" element={<ShopComponent/>} />
                <Route path="/Contact" element={<ContactComponent/>} />
            </Routes>
             <FooterComponent/>
        </Router>
        </>
    )
}

export default RouterPageComponent
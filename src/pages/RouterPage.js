import react from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeComponent from './Home'
import AboutComponent from './About'
import BlogComponent from './Blog'
import ShopComponent from './Shop'
import ContactComponent from './Contact'
import HeaderInnerHeadComponent from './HeaderInnerPage'
import FooterComponent from './Footer'
const RouterPageComponent =()=>{
    return(
        <>
        <Router>
            <HeaderInnerHeadComponent/>
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
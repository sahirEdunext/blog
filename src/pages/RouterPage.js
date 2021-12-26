import react, {useState} from 'react'
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
             {/* Inner page header Common Start*/}
                
             {/* Inner page header Common End */}
            <Routes>
                <Route path="/" element={<HomeComponent/>}/>
                <Layout>
                <Route path="/About" element={<AboutComponent/>} />
                <Route path="/Blog" element={<BlogComponent/>} />
                <Route path="/Shop" element={<ShopComponent/>} />
                <Route path="/Contact" element={<ContactComponent/>} />
                </Layout>
            </Routes>
             {/* Common footer Start */}
                
             {/* Common footer End */}

        </Router>
        </>
    )
}


const Layout = ({ children }) => (
    <div>
      <HeaderInnerHeadComponent />
        {children}
      <FooterComponent />
    </div>
  );

export default RouterPageComponent
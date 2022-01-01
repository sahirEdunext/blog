import react, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "./Home";
import AboutComponent from "./About";
import BlogComponent from "./Blog";
import ShopComponent from "./Shop";
import ContactComponent from "./Contact";
import HeaderInnerHeadComponent from "./HeaderInnerPage";
import FooterComponent from "./Footer";
const RouterPageComponent = (props) => {
  //var navigate = useNavigate();
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          {/* pages that have same header and footer */}
          <Layout>
            <Route path="/about" component={AboutComponent} />
            <Route path="/Blog" component={BlogComponent} />
            <Route path="/Shop" component={ShopComponent} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
};

const Layout = ({ children }) => (
  <div>
    <HeaderInnerHeadComponent />
    {children}
    <FooterComponent />
  </div>
);

export default RouterPageComponent;

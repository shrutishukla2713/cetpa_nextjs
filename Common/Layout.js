import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import NavBar from "../Common/NAvBar";
import Navigation from "./NavigationMyntra";

const Layout = (props) => {
    const { children, footerstatus } = props;
    return (
      <>
        {true ? (
          <div>

            <Navigation/>
            {children}
            {!footerstatus && <Footer />}
          </div>
        ) : (
          <div className="container">

            <Navigation/>
            {children}
            {!footerstatus && <Footer />}
          </div>
        )}
      </>
    );
  };
export default Layout;

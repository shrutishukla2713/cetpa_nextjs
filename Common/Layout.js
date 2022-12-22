import React from "react";
import Footer from "../Common/Footer";
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

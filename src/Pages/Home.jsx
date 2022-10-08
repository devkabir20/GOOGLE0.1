import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import Search from "../Components/Search";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__header">
          <div className="home__headerLeft">
            {/* <Link to="./about">About</Link>
            <Link to="./store">Store</Link> */}
          </div>
          <div className="home__headerRight">
            <Link to="./gmail">Gmail</Link>
            <Link to="./image">Image</Link>
            <div className="Appicon">
              <AppsIcon />
            </div>
            <Avatar />
          </div>
        </div>
        <div className="home__body">
          <img
            src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
            alt="Google"
          />
          <div className="home__inputSearch">
            <Search />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;

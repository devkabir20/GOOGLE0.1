import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../Components/StateProvider";
import useGoogleSearch from "../Components/useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = () => {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <>
      <div className="search__Page">
        <div className="searchPage__header">
          <Link to="/">
            <img
              className="searchPage__logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="google-logo"
            />
          </Link>
          <div className="searchPage__headerBody">
            <Search hideButtons />
            <div className="searchPage__Options">
              <div className="searchPage__optionLeft">
                <div className="search__option">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="search__option">
                  <DescriptionIcon />
                  <Link to="/news">News</Link>
                </div>
                <div className="search__option">
                  <ImageIcon />
                  <Link to="/images">Images</Link>
                </div>
                <div className="search__option">
                  <LocalOfferIcon />
                  <Link to="/shopping">Shopping</Link>
                </div>
                <div className="search__option">
                  <RoomIcon />
                  <Link to="/maps">Maps</Link>
                </div>
                <div className="search__option">
                  <MoreVertIcon />
                  <Link to="/more">More</Link>
                </div>
              </div>
              <div className="searchPage__optionRight">
                <div className="search__option">
                  <Link to="/setting">Setting</Link>
                </div>
                <div className="search__option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hrline" />

        {term && (
          <div className="searchPage__results">
            <p className="searchPage__resultCount">
              About {data?.searchInformation.totalResults} results (
              {data?.searchInformation.searchTime} seconds)
            </p>
            {data?.items.map((item) => (
              <div className="searchPage__result">
                <span className="searchPage__displayLink">
                  {item.formattedUrl}
                </span>
                <h1 className="searchPage__title">
                  <a href={item.link}>{item.title}</a>
                </h1>
                <p className="searchPage__des">{item.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;

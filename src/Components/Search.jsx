import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("./search");
  };

  return (
    <>
      <form className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <MicIcon className="Mic__inputIcon" />
        </div>

        {!hideButtons ? (
          <div className="search__buttons">
            <Button type="submit" onClick={search}>
              Google Search
            </Button>
            <Button>I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search__hideButtons">
            <Button type="submit" onClick={search}>
              Google Search
            </Button>
            <Button>I'm Feeling Lucky</Button>
          </div>
        )}
      </form>
    </>
  );
};
export default Search;

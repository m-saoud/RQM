import { useState } from "react";

import "./App.css";

function App() {


  
  return (
    <>
      <div>
        <h1>Build a Random Quote Machine</h1>
      </div>
      <div id="quote-box">
        <div className="quote-text">
          <i className=""> </i>
          <span id="text">
            It’s your place in the world; it’s your life. Go on and do all you
            can with it, and make it the life you want to live.
          </span>
        </div>
        <div className="quote-author" style="opacity: 1">
          - <span id="author">Mae Jemison</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22It%E2%80%99s%20your%20place%20in%20the%20world%3B%20it%E2%80%99s%20your%20life.%20Go%20on%20and%20do%20all%20you%20can%20with%20it%2C%20and%20make%20it%20the%20life%20you%20want%20to%20live.%22%20Mae%20Jemison"
            style="background-color: rgb(155, 89, 182);"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
            href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Mae%20Jemison&amp;content=It%E2%80%99s%20your%20place%20in%20the%20world%3B%20it%E2%80%99s%20your%20life.%20Go%20on%20and%20do%20all%20you%20can%20with%20it%2C%20and%20make%20it%20the%20life%20you%20want%20to%20live.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
            style="background-color: rgb(155, 89, 182);"
          >
            <i className=""></i>
          </a>
          <button className="button" id="new-quote">
            New quote{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

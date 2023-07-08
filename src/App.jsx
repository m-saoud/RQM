import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { FaTwitter, FaTumblr } from "react-icons/fa";

function App() {
  const [quote, setQuote] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante"
  );
  const [author, setAuthor] = useState("Someone famous");
  const [color, setColor] = useState("#000000");

  const quotes = [
    {
      quote: "quote1",
      author: "author1",
    },
    { quote: "quote2", author: "author2" },
    { quote: "quote3", author: "author3" },
  ];

  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#FFFF00"];

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const changColor = Math.floor(Math.random() * colors.length);
    setQuote(quotes[randomIndex].quote);
    setAuthor(quotes[randomIndex].author);
    setColor(colors[changColor]);
  };

  return (
    <div className="app-container" style={{ backgroundColor: color, width: '100vw', height: '100vh' }}> 

    <Container className="card-container">
      <Card
        style={{
         color:color,
          display: "flex",
          flexDirection: "column",
          top: 200,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <h1>Quote Machine</h1>

        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className="text" id="text">
              {quote}
            </p>
            <footer
              style={{ display: "flex", justifyContent: "flex-end" }}
              className="author"
              id="author"
            >
              {author}
            </footer>
          </blockquote>
        </Card.Body>
        <Button
          onClick={generateRandomQuote}
          id="new-quote"
          style={{ width: 150 }}
          variant="primary"
        >
          New Quote
        </Button>
        <div style={{ margin: 2, padding: 2 }} className="share-buttons">
          <a
            target="_blank"
            href="'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
          >
            <Button
              aria-label="Share on Twitter"
              style={{ margin: 2 }}
              className="mr-2"
              variant="outline-primary"
            >
              <FaTwitter />
            </Button>
          </a>
          <a target="_blank" href="#">
            <Button aria-label="Share on Tumblr" variant="outline-primary">
              <FaTumblr />
            </Button>
          </a>
        </div>
      </Card>
    </Container>
    </div>
  );
}

export default App;

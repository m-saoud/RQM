import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button as BootstrapButton } from "react-bootstrap";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");

  const quotes = [
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "- Napoleon Hill",
    },
    { quote: "Dream big and dare to fail.", author: "- Norman Vaughan" },
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "- Kevin Kruse",
    },
  ];

  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#FFFF00"];

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setQuote(quotes[randomIndex].quote);
    setAuthor(quotes[randomIndex].author);
    setColor(colors[randomColorIndex]);
  };

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <Container className="card-container">
        <Card
          className="quote-card"
          style={{
            color: color,
            display: "flex",
            flexDirection: "column",
            top: 200,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            transition: "opacity 0.5s ease",
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
          <BootstrapButton
          onClick={generateRandomQuote}
          id="new-quote"
          style={{
            width: 150,
            border: "none",
            fontWeight: "bold",
            padding: 10,
          }}
        >
          Press Here
        </BootstrapButton>
        </Card>
        
      </Container>
    </div>
  );
}

export default App;

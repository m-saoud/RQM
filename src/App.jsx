import { useState } from "react";
import Button from "./components/button";
import Card from "./components/Card";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

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
    const changeColor = Math.floor(Math.random() * colors.length);
    setQuote(quotes[randomIndex].quote);
    setAuthor(quotes[randomIndex].author);
    setColor(colors[changeColor]);
  };

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <Container className="card-container">
        <Card quote={quote} author={author} color={color}>
          <Button generateRandomQuote={generateRandomQuote} />
        </Card>
      </Container>
    </div>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { FaTwitter, FaTumblr } from "react-icons/fa";

function App() {
  return (
    <div className="card-container">
      <Card
        style={{
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
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer
              style={{ display: "flex", justifyContent: "flex-end" }}
              className="blockquote-footer"
            >
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
        <Button style={{ width: 150 }} variant="primary">
          New Quote
        </Button>
        <div style={{ margin: 2, padding: 2 }} className="share-buttons">
          <Button
            aria-label="Share on Twitter"
            style={{ margin: 2 }}
            className="mr-2"
            variant="outline-primary"
          >
              <FaTwitter />
          </Button>
          <Button aria-label="Share on Tumblr" variant="outline-primary">
            <FaTumblr />{" "}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;

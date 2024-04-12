import PropTypes from "prop-types";
import { Card as BootstrapCard } from "react-bootstrap";
import Button from "./button";

const Card = ({ color, quote, author, children, generateRandomQuote }) => {
  return (
    <div>
      <BootstrapCard
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
          <Button onClick={generateRandomQuote}>{children}</Button>
        </Card.Body>
      </BootstrapCard>
    </div>
  );
};

Card.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  generateRandomQuote: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Card;

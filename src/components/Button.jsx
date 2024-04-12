import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ generateRandomQuote } )=> {
  return (
      <div>
    <BootstrapButton onClick={generateRandomQuote}
    id="new-quote"
    style={{ width: 150,border:'none', fontWeight:'bold',padding:10}}
      >
    Press Here
          </BootstrapButton>
      </div>
     )
     
}
Button.propTypes = {
    generateRandomQuote: PropTypes.func
};
  
export default Button

// import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick} style={{ backgroundColor: props.bgcolor }}>
      Clear all
    </button>
  );
};

Button.defaultProps = {
  bgcolor: '#000'
};

export default Button;

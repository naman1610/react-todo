import Button from './Button';
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
      <header className="header">
        <h1>{props.title}</h1>
        <Button bgcolor = '#000' onClick={props.clrall} />
      </header>
  )
}

Header.defaultProps = {
  title: 'To Do List'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;
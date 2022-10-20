import React from 'react'
import PropTypes from 'prop-types'

function Header({baslik}) {
  return (
    <div>
        <h1>{ baslik }</h1>
    </div>
  );
}

Header.propTypes = {
  baslik: PropTypes.string,
}

Header.defaultProps = {
  baslik: 'Header is not typed'
}

export default Header
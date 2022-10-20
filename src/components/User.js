import React from 'react';
import PropTypes from "prop-types";

function User({ data }) {
return (
    <div>
        <div>Username: {data.username}</div>
        <div>Age: {data.age}</div>
        <div>City: {data.city}</div> 
        {/* <h3>Friends</h3>
        <div>{friends.map((friend,i) => (
            <div key={i}>{friend}</div>
        ))}</div> */}
    </div>
  )
}

User.propTypes = {
    data: PropTypes.exact({
        username: PropTypes.string,
        age: PropTypes.number,
        city: PropTypes.string,
    })
};

export default User;
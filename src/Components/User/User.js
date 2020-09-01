import React from 'react';

const User = (props) => {
    const { name, email } = props.user;

    const userStyle = {
        borderRadius:'20px',
        border: '5px solid teal',
        padding: '10px', 
        margin: '10px'
    }

    return (
        <div style={userStyle}>
            <h2>My name is: {name}</h2>
            <p>My email is: {email}</p>
        </div>
    );
};

export default User;
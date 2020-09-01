import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const User = (props) => {
    const { name, email, id } = props.user;

    const history = useHistory();

    const showDetails = (id) => {
        const url = `/${id}`;
        history.push(url);
    }

    const userStyle = {
        borderRadius:'20px',
        border: '5px solid teal',
        padding: '10px', 
        margin: '10px'
    }

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 30px',
        borderRadius: '10px',
        border: 'none',
        outline: 'none'
    }

    return (
        <div style={userStyle}>
            <h2>My name is: {name}</h2>
            <p>My email is: {email}</p>
            <p>Id: {id}</p>
            {/* <Link to={`/${id}`}><button style={buttonStyle}>Show Details</button></Link> */}
            <button style={buttonStyle} onClick={() => showDetails(id)}>Show Details</button> {/* using history hook  */}
        </div>
    );
};

export default User;
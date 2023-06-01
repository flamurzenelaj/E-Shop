import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Profile({ user }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  if(!localStorage.getItem('token')){
    navigate("/login")
  }
  return (
    <Fragment>
      <h1>User Profile Page</h1>
      <ul className="list-group">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Email: {email}</li>
      </ul>
    </Fragment>
  );
}

export default Profile;

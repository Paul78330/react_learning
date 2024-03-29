import React, { useState } from "react";

export default function EditProfile() {
  
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setProfile((prevProfile) =>({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}
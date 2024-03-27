import React from 'react';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

function Friend(){
  const friend = friends[1];
  return(
    <div>
      <h1>{friend.title}</h1>
      <img
        src={friend.src}
        alt={friend.title}
      />
    </div>
  )
}

export default Friend;
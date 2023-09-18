import React, { useState, useEffect } from 'react';


const trickList = [
    {id: 1, title: 'Big Cup (Ken Grip)', completed: false},
    {id: 2, title: 'Small Cup (Ken Grip)', completed: false},
    {id: 3, title: 'Base Cup (Ken Grip)', completed: false},
    {id: 4, title: 'Candle Stick', completed: false},
    {id: 5, title: 'Spike (Ken Grip)', completed: false},
    {id: 6, title: 'Big Cup (Sara Grip)', completed: false},
    {id: 7, title: 'Small Cup (Sara Grip)', completed: false},
    {id: 8, title: 'Base Cup (Sara Grip)', completed: false},
    {id: 9, title: 'Spike (Sara Grip)', completed: false},
    {id: 10, title: 'Penguin (Ken Grip)', completed: false},
    {id: 11, title: 'Airplane (Tama Grip)', completed: false},
    {id: 12, title: 'Big Cup to Small Cup (Ken Grip)', completed: false},
    {id: 13, title: 'Small Cup to Big Cup (Ken Grip)', completed: false},
    {id: 14, title: 'Base Cup to Big Cup (Ken Grip)', completed: false},
    {id: 15, title: 'Base Cup to Small Cup (Ken Grip)', completed: false},
    {id: 16, title: '"Moshi Kame" Big Cup to Base Cup (Sara Grip)', completed: false},
    {id: 17, title: '"Moshi Kame" Base Cup to Big Cup (Sara Grip)', completed: false},
    {id: 18, title: '"Clack Back" Big Cup -> Clack -> Big Cup (Sara Grip)', completed: false},
    {id: 19, title: 'Big Cup -> Knee Bounce -> Big Cup (Sara Grip)', completed: false},
    {id: 20, title: 'Big Cup -> Orbit -> Big Cup (Ken Grip)', completed: false},
    {id: 21, title: 'Spike -> Earth Turn (Ken Grip)', completed: false},
    {id: 22, title: 'Airplane -> Jumping Stick (Tama Grip)', completed: false},
    {id: 23, title: '"Around The Block" Big Cup -> Small Cup -> Base Cup (Ken Grip)', completed: false},
    {id: 24, title: '"Around The Block" Big Cup -> Small Cup -> Base Cup (Sara Grip)', completed: false},
    {id: 25, title: 'Base Ball (Sara Grip)', completed: false},
    {id: 26, title: 'Big Cup -> Spike (Ken Grip)', completed: false},
    {id: 27, title: 'Small Cup -> Spike (Ken Grip)', completed: false},
    {id: 28, title: 'Base Cup -> Spike (Ken Grip)', completed: false},
    {id: 29, title: 'Moshi Kame X 10 (Sara Grip)', completed: false},
    {id: 30, title: 'Big Cup -> Ken Flip -> Big Cup (Ken Grip)', completed: false},
    {id: 31, title: 'Swing Spike (Ken Grip)', completed: false},
    {id: 32, title: '"Around Japan" Small Cup -> Big Cup -> Spike (Ken Grip)', completed: false},
    {id: 33, title: 'Around The World (Ken Grip)', completed: false},
    {id: 34, title: 'Big Cup -> Small Cup -> Base Cup -> Spike (Ken Grip)', completed: false},
];



function TrickList({ username }) {
    const [tricks, setTricks] = useState(trickList);
  
    useEffect(() => {
      // Load the trickList from local storage when the component mounts
      const storedTricks = JSON.parse(localStorage.getItem('tricks'));
      if (storedTricks) {
        setTricks(storedTricks);
      }
    }, []);
  
    const handleTrickToggle = (trickId) => {
      const updatedTricks = tricks.map((trick) => {
        if (trick.id === trickId) {
          const updatedTrick = { ...trick, completed: !trick.completed };
          return updatedTrick;
        }
        return trick;
      });
  
      // Update the state with the new trick list
      setTricks(updatedTricks);
  
      // Save the updated trick list to local storage
      localStorage.setItem('tricks', JSON.stringify(updatedTricks));
    };
  
    return (
      <div>
        <h3>This site will save your progress so feel free to bookmark.</h3>
        <ul>
          {tricks.map((trick) => (
            <li key={trick.id}>
              <input
                type="checkbox"
                checked={trick.completed}
                onChange={() => handleTrickToggle(trick.id)}
              />
              {trick.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TrickList;
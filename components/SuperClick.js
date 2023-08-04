import React, { useState, useEffect } from 'react';
import './Game.css';

const Game = () => {
  const [time, setTime] = useState(10);
  const [score, setScore] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [time]);

  const handleImageClick = () => {
    if (time > 0) {
      setScore((prevScore) => prevScore + 10);
      setBlink(true);
      setTimeout(() => {
        setBlink(false);
      }, 200);
    }
  };

  return (
    <div className="center-container">
        <img 
        src="https://static.dc.com/dc/files/default_images/JL02_13_marquee%2520%25281%2529_56ea273a201ff1.12063732.jpg"
        alt="Your Image"
        className={blink ? 'blink-image' : ''}
        onClick={handleImageClick}
      />
      <div class="x">
      {time > 0 ? (
        <h2>Time: {time}s</h2>
      ) : (
        <h1>Time's Up!</h1>
      )}
      <h2>Score: {score}</h2>
    </div>
    </div>
  );
};

export default Game;
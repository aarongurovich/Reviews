import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  let subtractor = 1;
  let adder = 1;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  if(index == 0){
    subtractor = -(people.length-1);
  }
  if(index == people.length-1){
    adder = -(people.length-1);
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
      <button onClick= {() => setIndex(index-subtractor)}className='prev-btn'>
        <FaChevronLeft />
      </button>
      <button onClick= {() => setIndex(index+adder)} className='next-btn'>
        <FaChevronRight />
      </button>
      </div>
      <button onClick= {() => setIndex(getRandomInt(people.length))}className='random-btn'>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;

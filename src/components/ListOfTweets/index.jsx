import React from 'react';
import Tweet from '../tweet';
import './listOfTweets.scss';

export default function ListOfTweets() {
  return (
    <section className='grid-container '>
      <div className='grid-item-tweets '>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </section>
  );
}

import React from 'react';
import Tweet from '../tweet';
import './listOfTweets.scss';

export default function ListOfTweets({ tweets = [] }) {
  return (
    <section className='grid-container '>
      <div className='grid-item-tweets '>
        {tweets.map(
          ({
            id,
            text,
            created_at,
            favorited,
            retweeted,
            user: { name, screen_name, profile_image_url_https },
          }) => (
            <Tweet
              key={id}
              id={id}
              text={text}
              name={name}
              screen_name={screen_name}
              profile_image={profile_image_url_https}
              created_at={created_at}
              favorited={favorited}
              retweeted={retweeted}
            />
          ),
        )}
      </div>
    </section>
  );
}

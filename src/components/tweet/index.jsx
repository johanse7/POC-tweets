import React from 'react';
import ViewMore from './viewMore';
import { reduceText } from '../../utils/';
import { TiArrowBack } from 'react-icons/ti';
import { FaRetweet } from 'react-icons/fa';
import { GrStar } from 'react-icons/gr';
import './tweet.scss';
import '../../styles/base/_animations.scss';

export default function Tweet({ text, name, screen_name, profile_image, created_at }) {
  return (
    <>
      <main>
        <section className='tweet-card fade-anima'>
          <div className='header'>
            <img src={profile_image} alt='profile' />
            <div className='content-info-user'>
              <span className='use-name' title={name}>
                {name}
              </span>
              <span className='user-nick-name' title={screen_name}>
                {screen_name}
              </span>
            </div>
          </div>
          <div className='content-text'>
            <p>{reduceText(text, 100)}</p>
          </div>
          <div className='options'>
            <TiArrowBack />
            <FaRetweet />
            <GrStar />
          </div>
        </section>
        <ViewMore text={text} created_at={created_at} />
      </main>
    </>
  );
}

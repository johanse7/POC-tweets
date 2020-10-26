import React from 'react';
import ViewMore from './viewMore';
import { reduceText } from '../../utils/';
import { TiArrowBack } from 'react-icons/ti';
import { FaRetweet } from 'react-icons/fa';
import { GrStar } from 'react-icons/gr';
import './tweet.scss';

export default function Tweet() {
  const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quas molestias
              dolores aperiam labore doloremque culpa vel obcaecati qui animi voluptatibus,
              similique natus eum sint. Dolorum delectus ipsam dolore explicabo.`;
  return (
    <>
      <main>
        <section className='tweet-card'>
          <div className='header'>
            <img
              src='
           https://pbs.twimg.com/profile_images/1320544095471693826/G-LJ_Prv_normal.png'
              alt='profile'
            />
            <div className='content-info-user'>
              <span className='use-name'>elPajarito</span>
              <span className='user-nick-name'>@tuitero</span>
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
        <ViewMore text={text} />
      </main>
    </>
  );
}

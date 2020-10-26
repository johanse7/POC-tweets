import React, { useState } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './viewMore.scss';
import '../../styles/base/_animations.scss';

export default function ViewMore({ text }) {
  const [viewMore, setViewMore] = useState(false);

  const handleClickViewMore = () => {
    setViewMore((value) => !value);
  };

  return (
    <section className='content-view-more'>
      <div className={`view-more-section  ${viewMore ? 'expand' : ''}`}>
        <div className='view-more-section-icon'>
          <AiOutlineTwitter />
        </div>
        <div className='view-more-section-expand' onClick={handleClickViewMore}>
          <span>... más</span>
          <RiArrowDropDownLine />
        </div>
        {viewMore && (
          <div className='detail-tweet'>
            <div className='info-date'>10:07 am - 9 Apr 13</div>
            <p className='fade-anima'>{text}</p>
            <div className='collapsed' onClick={handleClickViewMore}>
              <MdKeyboardArrowUp />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

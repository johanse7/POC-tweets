import React, { useState } from 'react';
import { getFormatDate } from '../../utils/index';
import { AiOutlineTwitter } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './viewMore.scss';
import '../../styles/base/_animations.scss';

export default function ViewMore({ text, created_at }) {
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
          <span>... more</span>
          <RiArrowDropDownLine />
        </div>
        {viewMore && (
          <div className='detail-tweet'>
            <div className='info-date'>{getFormatDate(created_at)}</div>
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

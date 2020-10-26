import React from 'react';
import { GoSearch } from 'react-icons/go';
import './serarchForm.scss';

export default function SearchForm({ refInput, handleInput }) {
  return (
    <div className='content-search'>
      <span>Tweet Search</span>
      <div className='wrap'>
        <div className='search-icon'>
          <GoSearch />
        </div>
        <input type='search' ref={refInput} onChange={handleInput} placeholder='Search' />
      </div>
    </div>
  );
}

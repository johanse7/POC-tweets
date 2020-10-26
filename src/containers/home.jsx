import React from 'react';
import SearchForm from '../components/searchForm';
import ListOfTweets from '../components/ListOfTweets';
import useSearchTweets from '../hooks//useSearchTweets';

export default function Home() {
  const { setKeyWord, refInput } = useSearchTweets();

  const handleInput = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className='App-wrapper'>
      <div className='App-main'>
        <SearchForm refInput={refInput} handleInput={handleInput} />
        <ListOfTweets />
      </div>
    </div>
  );
}

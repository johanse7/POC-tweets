import React from 'react';
import SearchForm from '../components/searchForm';
import ListOfTweets from '../components/ListOfTweets';
import useSearchTweets from '../hooks//useSearchTweets';
import Spinner from '../components/spinner';

export default function Home() {
  const { setKeyWord, refInput, tweets, loading } = useSearchTweets();

  const handleInput = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className='App-wrapper'>
      <div className='App-main'>
        {loading && <Spinner />}
        <SearchForm refInput={refInput} handleInput={handleInput} />
        <ListOfTweets tweets={tweets} />
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useCallback } from 'react';
import SearchForm from '../components/searchForm';
import ListOfTweets from '../components/ListOfTweets';
import Error from '../components/error';
import NotFound from '../components/notFound';
import useSearchTweets from '../hooks//useSearchTweets';
import useNearScreen from '../hooks/useNearScreen';
import Spinner from '../components/spinner';
import debounce from 'just-debounce-it';
import { validInputSearch } from '../utils';
import { characterSpecial, NEX_URL_RESULTS } from '../utils/constans';

export default function Home() {
  const refElement = useRef();

  const { setKeyWord, refInput, tweets, loading, hasError, setUrlNextResults } = useSearchTweets();

  const { isNearScreen } = useNearScreen({
    refElement: loading ? null : refElement,
  });

  const handleInput = (e) => {
    const value = e.target.value;
    if (validInputSearch(value)) {
      setKeyWord(value);
      localStorage.removeItem(NEX_URL_RESULTS);
      setUrlNextResults(null);
      return;
    }
    refInput.current.value = value.replace(characterSpecial, '');
  };

  const debounceHandleNextPage = useCallback(
    debounce(() => setUrlNextResults(localStorage.getItem(NEX_URL_RESULTS)), 200),
    [setUrlNextResults],
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen],
  );

  return (
    <div className='App-wrapper'>
      <div className='App-main'>
        {loading && <Spinner />}
        <SearchForm refInput={refInput} handleInput={handleInput} />
        {!hasError ? (
          tweets.length > 0 ? (
            <>
              <ListOfTweets tweets={tweets} />
              <div ref={refElement}></div>
            </>
          ) : (
            <NotFound />
          )
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

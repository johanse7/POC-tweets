import { useEffect, useState, useRef } from 'react';
import { getTweetsByKeyWord } from '../services/apitwitter';
import { NEX_URL_RESULTS } from '../utils/constans';

export default function useSearchTweets(delaySearch = 600) {
  const [loading, setLoading] = useState(false);
  const [keyWord, setKeyWord] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [urlNextResults, setUrlNextResults] = useState(null);
  const refInput = useRef();

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        try {
          if (keyWord === refInput.current.value) {
            setLoading(true);
            const { statuses, search_metadata } = await getTweetsByKeyWord(keyWord, urlNextResults);
            setLoading(false);
            const storageUrl = localStorage.getItem(NEX_URL_RESULTS);

            if (storageUrl) setTweets((prevState) => [...prevState, ...statuses]);
            else setTweets(statuses);

            //save next URL
            localStorage.setItem(NEX_URL_RESULTS, search_metadata?.next_results);
          }
        } catch (error) {
          setLoading(false);
          setHasError(true);
          console.error(error.toString());
        }
      }, delaySearch);
    })();
  }, [keyWord, delaySearch, urlNextResults]);

  return {
    setKeyWord,
    refInput,
    tweets,
    loading,
    hasError,
    setUrlNextResults,
  };
}

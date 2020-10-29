import { useEffect, useState, useRef, useContext } from 'react';
import { getTweetsByKeyWord } from '../services/apitwitter';
import Context from '../context/ContextApp';
import { NEX_URL_RESULTS } from '../utils/constans';

export default function useSearchTweets(delaySearch = 600) {
  const { loading, setLoading } = useContext(Context);
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
            const { statuses, search_metadata } = await getTweetsByKeyWord(keyWord);
            setTweets(statuses);
            setLoading(false);

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
  }, [keyWord, delaySearch]);

  useEffect(() => {
    (async () => {
      try {
        if (!keyWord) return;

        setLoading(true);
        const { statuses, search_metadata } = await getTweetsByKeyWord(keyWord, urlNextResults);
        setTweets((prevState) => [...prevState, ...statuses]);
        setLoading(false);
        localStorage.setItem(NEX_URL_RESULTS, search_metadata?.next_results);
      } catch (error) {
        setLoading(false);
        setHasError(true);
        console.error(error.toString());
      }
    })();
  }, [urlNextResults]);

  return {
    setKeyWord,
    refInput,
    tweets,
    loading,
    hasError,
    setUrlNextResults,
  };
}

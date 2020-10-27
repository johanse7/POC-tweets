import { useEffect, useState, useRef } from 'react';
import { getTweetsByKeyWord } from '../services/apitwitter';

export default function useSearchTweets(delaySearch = 600) {
  const [loading, setLoading] = useState(false);
  const [keyWord, setKeyWord] = useState(null);
  const [tweets, setTweets] = useState([]);

  const refInput = useRef();

  useEffect(() => {
    (async () => {
      try {
        setTimeout(async () => {
          if (keyWord === refInput.current.value) {
            setLoading(true);
            const { statuses } = await getTweetsByKeyWord(keyWord);
            debugger;
            setTweets(statuses);
            setLoading(false);
          }
        }, delaySearch);
      } catch (error) {
        setLoading(false);
        console.error(error.toString());
      }
    })();
  }, [keyWord, delaySearch]);

  return {
    setKeyWord,
    refInput,
    tweets,
    loading,
  };
}

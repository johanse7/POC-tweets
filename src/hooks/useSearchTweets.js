import { useEffect, useState, useRef } from 'react';

export default function useSearchTweets(delaySearch = 600) {
  const [keyWord, setKeyWord] = useState('');
  // const [tweets, setTweets] = useState([]);

  const refInput = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (keyWord === refInput.current.value) {
        console.log(keyWord);
      }
    }, delaySearch);
  }, [keyWord, delaySearch]);

  return {
    setKeyWord,
    refInput,
  };
}

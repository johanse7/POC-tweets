import { useEffect, useState, useContext } from 'react';
import { postRetweet } from '../services/apitwitter';
import Contex from '../context/ContextApp';

export default function useRetweet({ retweetInit, id }) {
  const [reTweet, setReTweet] = useState(retweetInit);
  const [action, setAction] = useState(null);
  const { setNotification, setLoading } = useContext(Contex);

  useEffect(() => {
    if (!action) return;

    (async () => {
      try {
        setLoading(true);
        const responseRetweet = await postRetweet({ id, retweet: action.value });
        debugger;
        if (responseRetweet.error)
          throw new Error(responseRetweet.error?.allErrors.map(({ message }) => message).join(''));

        setReTweet(action.value);
        setLoading(false);

        const message = action.value ? 'you did do retweet' : `you undo  retweet`;
        setNotification({ title: 'retweet', message, success: true });
      } catch (error) {
        setLoading(false);
        setNotification({ title: 'retweet', message: error.toString(), success: false });
        setAction(null);
      }
    })();
  }, [action, id]);

  return {
    reTweet,
    setAction,
  };
}

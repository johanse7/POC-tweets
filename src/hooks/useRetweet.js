import { useEffect, useState, useContext } from 'react';
import { postRetweet } from '../services/apitwitter';
import Contex from '../context/notificationContext';

export default function useRetweet({ retweetInit, id }) {
  const [reTweet, setReTweet] = useState(retweetInit);
  const [action, setAction] = useState(null);
  const { setNotification, setLoading } = useContext(Contex);

  useEffect(() => {
    debugger;
    if (!action) return;

    (async () => {
      try {
        setLoading(true);
        const responseRetweet = await postRetweet({ action: action.name, id });
        debugger;
        if (responseRetweet.errors)
          throw new Error(responseRetweet.errors.map(({ message }) => message).join(''));

        const toggleRetweet = action.value;
        setReTweet(toggleRetweet);
        setLoading(false);

        const message = toggleRetweet ? 'you did do retweet' : `you undo  retweet`;
        setNotification({ title: 'retweet', message, success: true });
      } catch (error) {
        setLoading(false);
        setNotification({ title: 'retweet', message: error.toString(), success: false });
      }
    })();
  }, [action, id]);

  return {
    reTweet,
    setAction,
  };
}

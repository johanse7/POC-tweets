import { useEffect, useState, useContext } from 'react';
import { postFavoriteTweet } from '../services/apitwitter';
import Contex from '../context/ContextApp';

export default function useFavoriteTweet({ favoritedInit, id }) {
  const [favorite, setFavorite] = useState(favoritedInit);
  const [action, setAction] = useState(null);
  const { setNotification, setLoading } = useContext(Contex);

  useEffect(() => {
    if (!action) return;

    (async () => {
      try {
        setLoading(true);
        const responseFavorite = await postFavoriteTweet({ id, like: action.value });

        if (responseFavorite.error)
          throw new Error(responseFavorite.error?.allErrors.map(({ message }) => message).join(''));

        setFavorite(action.value);
        setLoading(false);

        const message = action.value ? 'you like this tweet' : `you don't like this tweet`;
        setNotification({ title: 'Like tweet', message, success: true });
      } catch (error) {
        setLoading(false);
        setNotification({ title: 'Like tweet', message: error.toString(), success: false });
        setAction(null);
      }
    })();
  }, [action, id]);

  return {
    favorite,
    setAction,
  };
}

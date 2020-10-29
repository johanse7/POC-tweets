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
        const responseFavorite = await postFavoriteTweet({ action: action.name, id });

        if (responseFavorite.errors)
          throw new Error(responseFavorite.errors.map(({ message }) => message).join(''));

        const toggleFavorite = action.value;
        setFavorite(toggleFavorite);
        setLoading(false);

        const message = toggleFavorite ? 'you like this tweet' : `you don't like this tweet`;
        setNotification({ title: 'Like tweet', message, success: true });
      } catch (error) {
        setLoading(false);
        setNotification({ title: 'Like tweet', message: error.toString(), success: false });
      }
    })();
  }, [action, id]);

  return {
    favorite,
    setAction,
  };
}

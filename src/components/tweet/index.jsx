import React, { useContext } from 'react';
import ViewMore from './viewMore';
import { reduceText } from '../../utils/';
import { TiArrowBack } from 'react-icons/ti';
import { FaRetweet } from 'react-icons/fa';
import { GrStar } from 'react-icons/gr';
import config from '../../config';
import { useCopyToClipboard } from '../../utils/copyToClipboard';
import Context from '../../context/ContextApp';
import useFavoriteTweet from '../../hooks/useFavoriteTweet';
import useRetweet from '../../hooks//useRetweet';
import { ACTIONS_FAVORITE, ACTIONS_RETWEET } from '../../utils/constans';
import './tweet.scss';
import '../../styles/base/_animations.scss';

export default function Tweet({
  text,
  id,
  name,
  screen_name,
  profile_image,
  created_at,
  retweeted,
  favorited,
}) {
  const { setNotification } = useContext(Context);

  const { favorite, setAction } = useFavoriteTweet({ favorited, id });
  const { reTweet, setAction: seActionRetweet } = useRetweet({ retweeted, id });

  const handleClickCopyTweet = () => {
    const urlTweet = `${config.urlGetTweet}/${id}`;
    const isCopy = useCopyToClipboard(urlTweet);
    if (!isCopy) {
      setNotification({
        title: 'Shared tweet',
        message: 'Error copy to clipboard',
        success: false,
      });
      return;
    }

    setNotification({ title: 'Shared tweet', message: 'Copy to clipboard', success: true });
  };

  const handleClickFavorite = () => {
    const action = !favorite ? ACTIONS_FAVORITE.create : ACTIONS_FAVORITE.destroy;
    setAction(action);
  };

  const handleClickRetweet = () => {
    debugger;
    const action = !reTweet ? ACTIONS_RETWEET.retweet : ACTIONS_RETWEET.unRetweet;
    seActionRetweet(action);
  };

  return (
    <>
      <main>
        <section className='tweet-card fade-anima'>
          <div className='header'>
            <img src={profile_image} className='fade-anima' loading='lazy' alt='profile' />
            <div className='content-info-user'>
              <span className='use-name' title={name}>
                {name}
              </span>
              <span className='user-nick-name' title={screen_name}>
                {screen_name}
              </span>
            </div>
          </div>
          <div className='content-text'>
            <p>{reduceText(text, 100)}</p>
          </div>
          <div className='options'>
            <TiArrowBack className='shared' onClick={handleClickCopyTweet} />
            <FaRetweet
              className={`retweet ${reTweet ? 'selected' : ''}`}
              onClick={handleClickRetweet}
            />
            <GrStar
              className={`favorited ${favorite ? 'selected' : ''}`}
              onClick={handleClickFavorite}
            />
          </div>
        </section>
        <ViewMore text={text} created_at={created_at} />
      </main>
    </>
  );
}

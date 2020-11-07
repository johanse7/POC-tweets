import config from '../config/';

export const getTweetsByKeyWord = async (keyWord, nextResults = null) => {
  const response = await fetch(
    `${config.urlApiTwitter}/search/tweets.json${
      nextResults || `?q=${keyWord}&count=${config.perPage}`
    } `,
    {
      headers: {
        Authorization: `bearer ${config.token}`,
      },
    },
  );
  return await response.json();
};

export const postFavoriteTweet = async ({ id, like = false }) => {
  const response = await fetch(`${config.urlProxy}/api/tweets/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, like }),
  });
  return await response.json();
};

export const postRetweet = async ({ id, retweet = false }) => {
  const response = await fetch(`${config.urlProxy}/api/tweets/retweet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, retweet }),
  });
  return await response.json();
};

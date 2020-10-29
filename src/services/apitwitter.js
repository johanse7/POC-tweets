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

export const postFavoriteTweet = async ({ action, id }) => {
  const response = await fetch(`${config.urlApiTwitter}/favorites/${action}.json?id=${id}`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${config.token}`,
    },
  });
  return await response.json();
};

export const postRetweet = async ({ action, id }) => {
  const response = await fetch(`${config.urlApiTwitter}/statuses/${action}.json?id=${id}`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${config.token}`,
    },
  });
  return await response.json();
};

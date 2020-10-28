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

import config from '../config/';

export const getTweetsByKeyWord = async (keyWord, nextResults = null) => {
  const response = await fetch(
    `${config.urlApiTwitter}/search/tweets.json${nextResults || `?q=${keyWord}&count=9`} `,
    {
      headers: {
        Authorization: `bearer ${config.token}`,
      },
    },
  );
  return await response.json();
};

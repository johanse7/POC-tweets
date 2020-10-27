import config from '../config/';

export const getTweetsByKeyWord = async (keyWord) => {
  const response = await fetch(`${config.urlApiTwitter}/search/tweets.json?q=${keyWord}`, {
    headers: {
      Authorization: `bearer ${config.token}`,
    },
  });
  return await response.json();
};

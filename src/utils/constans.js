export const characterSpecial = /[^\w\s]/gi;

export const NEX_URL_RESULTS = 'NEX_URL_RESULTS';

export const ACTIONS_FAVORITE = {
  create: {
    value: true,
  },
  destroy: {
    value: false,
  },
};

export const ACTIONS_RETWEET = {
  retweet: {
    name: 'retweet',
    value: true,
  },
  unRetweet: {
    name: 'unretweet',
    value: false,
  },
};

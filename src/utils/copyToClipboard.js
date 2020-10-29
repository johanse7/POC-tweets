import copy from 'copy-to-clipboard';

export const useCopyToClipboard = (text) => {
  if (typeof text === 'string' || typeof text == 'number') {
    copy(text.toString());
    return true;
  } else {
    console.error(`Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`);
    return false;
  }
};

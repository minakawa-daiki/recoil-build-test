import {atom, selector} from 'recoil';

const textState = atom({
  key: 'textState',
  default: '',
});

export const charCountState = selector({
  key: 'charCountState',
  get: async ({get}) => {
    const text = get(textState);
    await new Promise((resolve) => setTimeout(resolve, 1));
    return text.length;
  },
});

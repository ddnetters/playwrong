import { ERROR_MESSAGE } from './constants';

export const failTest = (): void => {
    throw new Error(ERROR_MESSAGE);
};

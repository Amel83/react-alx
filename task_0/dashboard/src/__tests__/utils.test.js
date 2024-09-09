import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getFullYear, getFooterCopy, getLatestNotification } from '../utils';

test('getFullYear returns the current year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns the correct text based on isIndex', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the expected notification string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});

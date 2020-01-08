import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the application header', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Welcome to YAAS!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
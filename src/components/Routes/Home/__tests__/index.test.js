import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from 'react-testing-library';

import { Home } from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('handleSubmit is called when clicking log in button', () => {
  const handleSubmit = jest.fn();
  const fakeUser = { username: 'user', password: 'abcd' };

  const { getByPlaceholderText, getByText, getByTestId } = render(<Home />);
  getByTestId('form').onsubmit = handleSubmit;
  getByPlaceholderText('Username').value = fakeUser.username;
  getByPlaceholderText('Password').value = fakeUser.password;
  const button = getByText('Log In');

  fireEvent.click(button);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

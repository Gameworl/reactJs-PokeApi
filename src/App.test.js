import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import {Navigation} from "./features/navigation/navigation";

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
     <Navigation/>
    </Provider>
  );

  expect(getByText(/Accueil/i)).toBeInTheDocument();
});


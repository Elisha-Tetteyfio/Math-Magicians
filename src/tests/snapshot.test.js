import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import Header from '../components/Header';
// import * as styles from '../components/Header.css';

it('Test header', () => {
  const tree = renderer
    .create(
      <StaticRouter>
        <Header />
      </StaticRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

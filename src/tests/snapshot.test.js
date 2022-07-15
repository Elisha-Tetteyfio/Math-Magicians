import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import { StaticRouter } from 'react-router-dom';
// import * as styles from '../components/Header.css';

it('Test header', () => {
  const tree = renderer
    .create(
      <StaticRouter>
        <Header />
      </StaticRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

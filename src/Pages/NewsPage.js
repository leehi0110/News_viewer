import React from 'react';
import {Route} from 'react-router-dom';
import Categories from '../Components/Categories';
import NewsList from '../Components/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <Route>
      <Categories/>
      <NewsList category={category}/>
    </Route>
  );
};

export default NewsPage;
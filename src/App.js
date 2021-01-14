import React, {useState, useCallback} from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './Pages/NewsPage';
import Styled from 'styled-components';
// import Categories from './Components/Categories';
// import NewsList from './Components/NewsList';

const Container = Styled.div`
  
`;

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category),[]);

  return (
    <Container>
      <Route path="/:category?" component={NewsPage}/>
    </Container>
  )

  // return (
  //   <Rou>
  //     <Categories category={category} onSelect={onSelect}/>
  //     <NewsList category={category}/>
  //   </Route>
  // );
};

export default App;

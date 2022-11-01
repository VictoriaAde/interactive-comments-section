import { render } from 'react-dom';
import { StrictMode } from 'react';
import './style.css';
import Comment from './Comments';
import CurrentUser from './CurrentUser';

const App = () => {
  return (
    <StrictMode>
      <main className=" bg-Light_gray px-3 py-7">
        <Comment />
        <CurrentUser />
      </main>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));

import { render } from 'react-dom';
import { StrictMode } from 'react';
import './style.css';
import Comment from './Comments';
import CurrentUser from './CurrentUser';

const App = () => {
  const addComment = (text, id) => {};

  return (
    <StrictMode>
      <main className=" bg-Light_gray px-3 py-7">
        <Comment />
        <CurrentUser submitLabel="Write" handleSubmit={addComment} />
      </main>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));

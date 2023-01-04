import { render } from 'react-dom';
import { StrictMode } from 'react';
import './style.css';
import Comment from './Comments';
import CurrentUser from './CurrentUser';
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  const addComment = (text, id) => {};

  return (
    <StrictMode>
      <Provider store={store}>
          <main className=" bg-Light_gray px-3 py-7">
            <Comment />
            <CurrentUser submitLabel="Write" handleSubmit={addComment} />
          </main>
      </Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));

import { render } from 'react-dom';
import { StrictMode } from 'react';
import './style.css';
import Comment from './Comments';
import Replies from './Replies';
// import { CurrentUser } from "./components/CurrentUser";

const App = () => {
  return (
    <StrictMode>
      <main className="h-full w-full bg-Light_gray flex flex-col gap-4 px-3 py-7">
        <Comment />
        <Replies />

        {/* <CurrentUser /> */}
      </main>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));

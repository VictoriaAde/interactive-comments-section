import { render } from 'react-dom';
import { StrictMode } from 'react';
import './style.css';
// import { CurrentUser } from "./components/CurrentUser";
import CommentsContainer from './components/CommentsContainer';

const App = () => {
  return (
    <StrictMode>
      <main className="bg-Soft_Red">
        <CommentsContainer />
        {/* <CurrentUser /> */}
      </main>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));

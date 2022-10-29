import { render } from "react-dom";
import { StrictMode } from "react";
import { CurrentUser } from "./components/CurrentUser";
import { Comments } from "./components/Comments";

const App = () => {
  return (
    <StrictMode>
      <CurrentUser />
      <Comments />
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));

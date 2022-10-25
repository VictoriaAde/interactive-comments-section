import { render } from "react-dom";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div>c</div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));

import "./styles/reset.less";
import { BrowserRouter } from "react-router-dom";
import RenderRouter from "../src/routers/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </>
  );
}

export default App;

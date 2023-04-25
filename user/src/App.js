import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoute";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

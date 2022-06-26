import NavbarPage from "./components/NavbarPage/NavbarPage";
import "./core/interceptor/index";
import "./assets/styles/index.scss";

import { Suspense } from "react";
import "./i18n";
function App() {
  return (
    <Suspense >
      <div className="app">
        <NavbarPage></NavbarPage>
      </div>
    </Suspense>
  );
}

export default App;

import  { Suspense} from "react";
import Main from "./layout/Main/Main";
import "./core/interceptor/index";
import "./assets/styles/index.scss";
import './index.scss'
import "./i18n";
// to change dir


function App() {
  return (
    <Suspense >
      <div className="app">
        <Main></Main>
      </div>
    </Suspense>
  );
}

export default App;

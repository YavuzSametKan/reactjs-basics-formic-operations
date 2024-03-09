import {MainRoutes} from "./routes/CustomRoutes";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    const BASE_NAME = '/reactjs-basics-formic-operations'
  return (
      <BrowserRouter basename={BASE_NAME}>
        <Routes>
          {
            MainRoutes.map(
                (routeProps, i) => <Route key={i} {...routeProps} />
            )
          }
        </Routes>
      </BrowserRouter>
  )
}

export default App

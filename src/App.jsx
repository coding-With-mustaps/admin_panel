import {
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

// Components
import Home from "./Components/Home/Home";

// Layout
import MainLayout from "./Layouts/MainLayout";
import UserContainer from "./Components/User/UserContainer";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<UserContainer />} />
      </Route>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />

export default App;

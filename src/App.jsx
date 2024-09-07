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
import UserList from "./Components/UserList/UserList";
import SingleUserPage from "./Pages/SinglePage/SinglePage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="new-user" element={<UserContainer />} />
        <Route path="users" element={<UserList />} />
        <Route path="user/:id" element={<SingleUserPage />} />
      </Route>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />

export default App;

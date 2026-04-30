import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import { Profile } from "./Renter/Profile";
import Posts from "./Renter/Posts";
import Login from "./Components/LoginPage";
import Register from "./Components/Register";
import Home from "./Components/HomePage";
import FavCartPage from "./FavCart/FavCartPage";
import { Authenticate } from "./Contexts/useAuth";
import CardDetailPage from "./Card/CardDetailPage";
import { Menu } from "./Components/Menu";
import Payments from "./Renter/payments";
import Chats from "./Renter/Chats";
import Settings from "./Renter/Settings";
import CreateHome from "./Renter/CreateHome";
import Privetrouter from "./privet_roter";
import ChoosePage from "./Components/ChoosePage";
import ReanterBuyer from "./Components/RenterBuyerPage";
import ProfilePage from "./Renter/ProfilePage";
import Galary from "./Card/Galary";
import Conversations from "./Renter/Conversation";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticate>
            <MainLayout />
      </Authenticate>
    ),

    children: [
      { index: true, element: <Home /> },
      { path: "homedetail/:id", element: <CardDetailPage /> },
      { path: "login", element: <Login /> },
      { path: "part1", element: <ChoosePage /> },
      { path: "register", element: <Register /> },
      { path: "menu", element: <Menu /> },
      { path: "favorites", element: <FavCartPage /> },
      { path: "info", element: <ReanterBuyer /> },
      { path: "gallary/:id", element: <Galary /> },

      {
        path: "profile",
        element:<Privetrouter><Profile /></Privetrouter> ,
        children: [
          { path: "overview", element: <ProfilePage /> },
          { path: "posts", element: <Posts /> },
          { path: "payments", element: <Payments /> },
          { path: "chats", 
            element: <Chats />,
            children: [
              {path: 'chat/:conversation_id', element: <Conversations/>}
            ]
          },


          { path: "settings", element: <Settings /> },
          { path: "createHome", element: <CreateHome /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}


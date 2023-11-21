import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ParentPage from "../pages/ParentPage";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		element: <ParentPage />,
		children: [
			{
				path: "/home",
				element: <HomePage />,
			},
			{
				path: "/chat/:groupId",
				element: <ChatPage />,
			},
		],
	},
]);

export default router;

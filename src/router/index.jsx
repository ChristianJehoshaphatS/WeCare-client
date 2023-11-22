import {createBrowserRouter, redirect} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ParentPage from "../pages/ParentPage";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";
import LandingPage from "../pages/LandingPage";
import VideoCallApp from "../pages/VideoCallPage";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
		loader: () => {
			if (localStorage.getItem("access_token")) {
				return redirect("/home");
			}
			return null;
		},
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
				path: "/chat",
				element: <ChatPage />,
			},
			{
				path: "/video",
				element: <VideoCallApp />,
			},
		],
		loader: () => {
			if (!localStorage.getItem("access_token")) {
				return redirect("/login");
			}
			return null;
		},
	},
]);

export default router;

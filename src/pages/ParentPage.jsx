import {Outlet} from "react-router-dom";

import NavBar from "../components/NavBar";

const ParentPage = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default ParentPage;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const openMenu = useSelector((store) => store.sidebar.openMenu);

	return (
		<>
			{openMenu ? (
				<div className="grid grid-cols-1 bg-gray-200">
					<div className="flex flex-col gap-5 py-5 px-8 mt-4">
						<ul className="flex flex-col gap-5">
							<li className="font-bold cursor-pointer">
								<Link to="/">Home</Link>
							</li>
							<li className="font-bold cursor-pointer">
								<Link to="/">Live</Link>
							</li>
							<li className="font-bold cursor-pointer">
								<Link to="/">Subscriptions</Link>
							</li>
							<li className="font-bold cursor-pointer">
								<Link to="/">History</Link>
							</li>
						</ul>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Sidebar;

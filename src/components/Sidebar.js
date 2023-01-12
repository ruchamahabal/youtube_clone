import { useSelector } from "react-redux";

const Sidebar = () => {
	const openMenu = useSelector((store) => store.sidebar.openMenu);

	return (
		<>
			{openMenu ? (
				<div className="grid grid-cols-1 bg-gray-200">
					<div className="flex flex-col gap-5 py-5 px-8 mt-4">
						<ul className="flex flex-col gap-5">
							<li className="font-bold cursor-pointer">Home</li>
							<li className="font-bold cursor-pointer">
								Subscriptions
							</li>
							<li className="font-bold cursor-pointer">
								History
							</li>
							<li className="font-bold cursor-pointer">
								Library
							</li>
						</ul>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Sidebar;

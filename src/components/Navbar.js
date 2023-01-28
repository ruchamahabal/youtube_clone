import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { toggleMenu } from "../slices/sidebarSlice";

import toggle from "../assets/images/toggle.png";
import youtube from "../assets/images/youtube.png";
import profile from "../assets/images/profile.jpeg";

const apiCall = (searchText) => {
	console.log(searchText);
};

const Navbar = () => {
	const [searchText, setSearchText] = useState("");
	const dispatch = useDispatch();

	const toggleMenufn = () => {
		dispatch(toggleMenu());
	};

	// debounce
	useEffect(() => {
		const timer = setTimeout(() => {
			// API call
			apiCall(searchText);
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchText]);

	return (
		<div className="flex justify-between items-center px-8 py-3 border-y border-gray-200">
			<div className="flex gap-5 justify-between items-center">
				<img
					className="w-8 h-5 cursor-pointer"
					src={toggle}
					onClick={toggleMenufn}
				></img>
				<Link to="/">
					<img className="w-10 h-10" src={youtube}></img>
				</Link>
			</div>
			<input
				type="text"
				placeholder="Search..."
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				className="border-x border-y border-gray-200 outline-none p-3 rounded-lg w-96"
			/>
			<img
				className="w-10 h-10 rounded-full cursor-pointer"
				src={profile}
			></img>
		</div>
	);
};

export default Navbar;

import { useDispatch } from "react-redux";
import { setFilteredVideoList } from "../slices/videoSlice";

const Tag = ({ tagName, setActive, active }) => {
	const dispatch = useDispatch();

	const filterVideos = () => {
		setActive(tagName);
		dispatch(setFilteredVideoList(tagName));
	};

	return (
		<button
			className={`px-2 py-1 rounded-lg ${
				active == tagName ? "bg-black text-white" : "bg-gray-200"
			}`}
			onClick={filterVideos}
		>
			{tagName}
		</button>
	);
};

export default Tag;

import { useDispatch } from "react-redux";
import { setFilteredVideoList } from "../slices/videoSlice";

const Tag = ({ tagName }) => {
	const dispatch = useDispatch();

	const filterVideos = () => {
		dispatch(setFilteredVideoList(tagName));
	};

	return (
		<button
			className="bg-gray-200 px-2 py-1 rounded-lg"
			onClick={filterVideos}
		>
			{tagName}
		</button>
	);
};

export default Tag;

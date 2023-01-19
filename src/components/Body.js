import TagList from "./TagList";
import VideoList from "./VideoList";

const Body = () => {
	return (
		<div className="grid grid-flow-row">
			<TagList />
			<VideoList />
		</div>
	);
};

export default Body;

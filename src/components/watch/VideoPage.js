import ChatContainer from "./ChatContainer";
import CommentSection from "./CommentSection";
import VideoPlayer from "./VideoPlayer";

const VideoPage = () => {
	return (
		<div className="flex flex-row">
			<div className="flex flex-col">
				<VideoPlayer />
				<CommentSection />
			</div>
			<ChatContainer />
		</div>
	);
};

export default VideoPage;

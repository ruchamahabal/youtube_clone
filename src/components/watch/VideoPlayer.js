import { useSearchParams } from "react-router-dom";

const VideoPlayer = () => {
	const [searchParam, setSearchParam] = useSearchParams();
	const videoID = searchParam.get("v");

	return (
		<div className="p-10">
			<iframe
				width="1000"
				height="500"
				src={"https://www.youtube.com/embed/" + videoID}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoPlayer;

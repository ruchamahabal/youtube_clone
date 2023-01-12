import { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

import { VIDEO_LIST_API } from "../config";

const VideoList = () => {
	const [videoList, setVideoList] = useState([]);
	const fetchData = async () => {
		const data = await fetch(VIDEO_LIST_API);
		const json = await data.json();
		setVideoList(json);
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(videoList);
	return (
		<div className="flex flex-wrap gap-6 px-10 py-5">
			{videoList?.items?.map((video) => (
				<VideoCard video={video} key={video.id} />
			))}
		</div>
	);
};

export default VideoList;

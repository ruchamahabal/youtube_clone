import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import VideoCard from "./VideoCard";

import { VIDEO_LIST_API } from "../config";
import { cacheVideoList } from "../slices/videoSlice";

const VideoList = () => {
	const videoList = useSelector((store) => store.videos.videoList);
	const dispatch = useDispatch();

	const fetchData = async () => {
		const data = await fetch(VIDEO_LIST_API);
		const json = await data.json();
		dispatch(cacheVideoList(json));
	};

	useEffect(() => {
		!videoList.length && fetchData();
	}, []);

	return (
		<div className="flex flex-wrap gap-6 px-10 py-5">
			{videoList?.items?.map((video) => (
				<VideoCard video={video} key={video.id} />
			))}
		</div>
	);
};

export default VideoList;

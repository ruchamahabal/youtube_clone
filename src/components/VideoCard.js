import moment from "moment";

const VideoCard = ({ video }) => {
	const { snippet, statistics } = video;
	const { title, channelTitle, publishedAt, thumbnails } = snippet;

	return (
		<div className="flex flex-col flex-wrap gap-2 w-80 mb-2">
			<img
				alt="thumbnail"
				className="rounded-lg w-80"
				src={thumbnails?.standard?.url}
			></img>
			<h2 className="text-xl font-bold flex-none">{title}</h2>
			<h3 className="text-base">{channelTitle}</h3>
			<div className="flex gap-2">
				<p className="text-slate-500">{statistics?.viewCount}</p>
				<p>|</p>
				<p className="text-slate-500">
					{moment(publishedAt).fromNow()}
				</p>
			</div>
		</div>
	);
};

export default VideoCard;

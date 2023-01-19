import moment from "moment";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
	const { snippet, statistics, id } = video;
	const { title, channelTitle, publishedAt, thumbnails } = snippet;

	return (
		<Link to={"/watch?v=" + id}>
			<div className="flex flex-col flex-wrap gap-2 w-80 mb-2 cursor-pointer">
				<img
					alt="thumbnail"
					className="rounded-lg w-80"
					src={thumbnails?.standard?.url}
				></img>
				<h2 className="text-md font-bold flex-none">{title}</h2>
				<h3 className="text-base">{channelTitle}</h3>
				<div className="flex gap-2">
					<p className="text-slate-500">{`${statistics?.viewCount} views`}</p>
					<p className="text-slate-500">|</p>
					<p className="text-slate-500">
						{moment(publishedAt).fromNow()}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default VideoCard;

import Comment from "./Comment";
import { comments } from "../../config.js";

const CommentSection = () => {
	const renderListOfComments = (comments) => {
		return comments.map((comment) => (
			<div>
				<Comment comment={comment} />
				{comment?.replies?.length && (
					<div className="ml-8">
						{renderListOfComments(comment.replies)}
					</div>
				)}
			</div>
		));
	};

	return <div className="p-5 ml-5">{renderListOfComments(comments)}</div>;
};

export default CommentSection;

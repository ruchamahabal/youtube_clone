const Comment = ({ comment }) => {
	return (
		<div className="flex flex-col gap-2 p-5 border border-slate-500 bg-slate-50">
			<h2 className="font-semibold text-xl">{comment.name}</h2>
			<p className="font-light">{comment.comment}</p>
		</div>
	);
};

export default Comment;

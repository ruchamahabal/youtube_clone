import Tag from "./Tag.js";
import { tags } from "../config.js";

const TagList = () => {
	return (
		<div className="flex gap-3 mt-5 p-5">
			{tags.map((tagName) => (
				<Tag tagName={tagName} />
			))}
		</div>
	);
};

export default TagList;
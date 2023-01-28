import { useState } from "react";

import Tag from "./Tag.js";
import { tags } from "../config.js";

const TagList = () => {
	const [active, setActive] = useState("");

	return (
		<div className="flex gap-3 mt-5 px-10 py-5">
			{tags.map((tagName) => (
				<Tag
					tagName={tagName}
					key={tagName}
					active={active}
					setActive={setActive}
				/>
			))}
		</div>
	);
};

export default TagList;

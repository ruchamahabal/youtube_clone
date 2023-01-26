import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../slices/chatSlice";

import { generateName, generateString } from "../helpers/chat_helper";

const ChatContainer = () => {
	const [text, setText] = useState("");
	const chat = useSelector((store) => store.chat);
	const dispatch = useDispatch();

	useEffect(() => {
		const interval = setInterval(() => {
			//API call
			dispatch(addItem(generateName() + " : " + generateString(15)));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col gap-5 mt-10">
			<div className="flex flex-col w-[300px] h-[500px] border border-gray-200 rounded-md">
				<div className="p-3 font-semibold border border-b-gray-300">
					Live Chat
				</div>
				<div className="flex flex-col-reverse overflow-y-scroll bg-gray-50">
					{chat.map((message) => (
						<div className="p-3 border-b-gray-200 border">
							{message}
						</div>
					))}
				</div>
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(addItem("Rucha Mahabal" + " : " + text));
					setText("");
				}}
			>
				<input
					className="border border-gray-300 rounded-md p-5 w-[300px] h-4 outline-none"
					type="text"
					placeholder="Say something..."
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				></input>
			</form>
		</div>
	);
};

export default ChatContainer;

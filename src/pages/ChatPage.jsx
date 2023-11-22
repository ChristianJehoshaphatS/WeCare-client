import React from "react";
import "../styleChat.css";

import {
	MultiChatSocket,
	useMultiChatLogic,
	MultiChatWindow,
} from "react-chat-engine-advanced";

export default function ChatPage() {
	const chatProps = useMultiChatLogic(
		"ce7d3869-0c1b-4129-9299-5428dc2cd481",
		localStorage.getItem("username"),
		localStorage.getItem("username")
	);
	return (
		<>
			<div style={{height: "90dvh"}} className="mt-[4rem]">
				<MultiChatWindow {...chatProps} />
				<MultiChatSocket {...chatProps} />
			</div>
		</>
	);
}

import React from "react";

import {
	MultiChatSocket,
	useMultiChatLogic,
	MultiChatWindow,
} from "react-chat-engine-advanced";

export default function ChatPage() {
	const chatProps = useMultiChatLogic(
		"ce7d3869-0c1b-4129-9299-5428dc2cd481",
		"chrisjs",
		"chrisjs"
	);
	return (
		<>
			<div style={{height: "90dvh", top: "1000px"}} className="mt-[5%]">
				<MultiChatWindow {...chatProps} />
				<MultiChatSocket {...chatProps} />
			</div>
		</>
	);
}

import * as React from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
	let result = "";
	if (result) return result;
	var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
		maxPos = chars.length,
		i;
	len = len || 5;
	for (i = 0; i < len; i++) {
		result += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return result;
}

export function getUrlParams(url = window.location.href) {
	let urlStr = url.split("?")[1];
	return new URLSearchParams(urlStr);
}

export default function VideoCallApp() {
	const roomID = getUrlParams().get("roomID") || randomID(5);
	let myMeeting = async (element) => {
		// generate Kit Token
		const appID = 1577138895;
		const serverSecret = "2ded02e89f1496142708e657e44e7eff";
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			serverSecret,
			roomID,
			randomID(5),
			randomID(5)
		);

		// Create instance object from Kit Token.
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		// start the call
		zp.joinRoom({
			container: element,
			sharedLinks: [
				{
					name: "Copy link",
					url:
						window.location.protocol +
						"//" +
						window.location.host +
						window.location.pathname +
						"?roomID=" +
						roomID,
				},
			],
			scenario: {
				mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
			},
		});
	};

	return (
		<div
			className="myCallContainer bg-slate-100"
			ref={myMeeting}
			style={{width: "100dvw", height: "100dvh"}}
		></div>
	);
}

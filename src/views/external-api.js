import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import Highlight from "../components/highlight";

export const ExternalApi = () => {
	const [message, setMessage] = useState("");

	return (
		<Container className="mb-5">
			<h1>Contact Vomox</h1>
			<p>
				You can get in touch with us at Vomox through{" "}
				<a href="https://vezeti.net/">Vezeti.</a>{" "}
				<strong>This route should be private</strong>.
			</p>
			<ButtonGroup>
				<Button color="primary" className="mt-5">
					Get Public Message
				</Button>
				<Button color="primary" className="mt-5">
					Get Private Message
				</Button>
			</ButtonGroup>

			{message && (
				<div className="mt-5">
					<h6 className="muted">Result</h6>
					<Highlight language="json">
						{JSON.stringify(message, null, 2)}
					</Highlight>
				</div>
			)}
		</Container>
	);
};

export default ExternalApi;

"use client";
import { useAction } from "next-safe-action/hook";
import { testAction } from "./test-action";

const TestComponent = () => {
	const { execute } = useAction(testAction);

	return (
		<div>
			<button
				className="text-white bg-black py-2 px-3 rounded-lg"
				onClick={() => execute({ foo: "123" })}>
				Execute
			</button>
		</div>
	);
};

export default TestComponent;

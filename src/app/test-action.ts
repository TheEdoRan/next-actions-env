"use server";

import { z } from "zod";
import { action } from "~/lib/safe-action";

export const testAction = action(
	{ input: z.object({ foo: z.string() }) },
	async ({ foo }) => {
		console.log(process.env.TEST_KEY);

		return {
			bar: true,
		};
	}
);

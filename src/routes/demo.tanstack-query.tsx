import { useQuery } from "@tanstack/react-query";
import { createRoute } from "@tanstack/react-router";

import type { RootRoute } from "@tanstack/react-router";

function TanStackQueryDemo() {
	const { data } = useQuery({
		queryKey: ["people"],
		queryFn: () =>
			fetch("https://swapi.dev/api/people")
				.then((res) => res.json())
				.then((d) => d.results as { name: string }[]),
		initialData: [],
	});

	return (
		<div className="p-4">
			<h1 className="text-2xl mb-4">People list from Swapi</h1>
			<ul>
				{data.map((person) => (
					<li key={person.name}>{person.name}</li>
				))}
			</ul>
		</div>
	);
}

export default (parentRoute: RootRoute) =>
	createRoute({
		path: "/demo/tanstack-query",
		component: TanStackQueryDemo,
		getParentRoute: () => parentRoute,
	});

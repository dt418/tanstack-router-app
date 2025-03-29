import { createRoot } from "react-dom/client";

function App() {
	return <div>Hello from self-contained module federation</div>;
}

export function DemoMfSelfContained(rootElement: HTMLElement) {
	const root = createRoot(rootElement);
	root.render(<App />);
}

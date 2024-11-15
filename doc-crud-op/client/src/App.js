import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Doctor from "./components/getdoctor/Doctor";
import Add from "./components/adddoctor/Add";
import Edit from "./components/updatedoctor/Edit";
import "./App.css";

function App() {
	const route = createBrowserRouter([
		{
			path: "/",
			element: <Doctor />,
			index: true,
		},
		{
			path: "/add",
			element: <Add />,
		},
		{
			path: "/edit/:id",
			element: <Edit />,
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={route} />
		</div>
	);
}

export default App;

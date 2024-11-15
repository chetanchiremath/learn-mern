import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Add from "./components/adduser/Add";


function App() {
  const route = createBrowserRouter([
    
    {
      path: "/add",
      element: <Add />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
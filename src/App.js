import logo from './logo.svg';
import './App.css';
import Navbar from './share/Navbar/Navbar';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Route';

function App() {
  return (
    <div className="">
    <RouterProvider router={router}>

    </RouterProvider>
   
    </div>
  );
}

export default App;

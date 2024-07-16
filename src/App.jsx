import { RouterProvider } from 'react-router-dom';
import './App.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterPaths from './routers';

function App() {
  return (
    <div>
      <RouterProvider router={RouterPaths}/>
    </div>
  );
}

export default App;

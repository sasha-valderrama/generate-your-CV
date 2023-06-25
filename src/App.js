import { RouterProvider } from 'react-router-dom';
import { appRouter } from './Router';
import './assets/global.css';

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

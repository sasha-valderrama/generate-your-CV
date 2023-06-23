import './assets/global.css';
import Home from './components/Home';
import CVForm from './components/CVform';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './components/Root';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route exact path="/" element={<Home />}>
        <Route path=":cv-form" element={<CVForm />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

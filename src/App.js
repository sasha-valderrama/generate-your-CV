import './assets/global.css';
import Home from './pages/Home';
import CVForm from './pages/CVForm';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './pages/Root';
import Instructions from './pages/Instructions';
import PageNotFound from './pages/PageNotFound';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}>
        <Route index element={<Instructions />} />
        <Route path="cv-form" element={<CVForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

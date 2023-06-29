import './assets/global.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import Instructions from './components/Instructions';
import Main from './components/Main';
import PageNotFound from './components/PageNotFound';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}>
        <Route index element={<Instructions />} />
        <Route path="cv-form" element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

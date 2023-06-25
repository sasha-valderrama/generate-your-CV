import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from '../pages/Root';
import Instructions from '../pages/Instructions';
import PageNotFound from '../pages/PageNotFound';
import Main from '../pages/Main';
import Home from '../pages/Home';

export const appRouter = createBrowserRouter(
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

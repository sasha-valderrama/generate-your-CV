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
import Instructions from './components/Instructions';
import PageNotFound from './components/PageNotFound';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}>
        <Route index element={<Instructions />} />
        <Route path="cv-form" element={<CVForm />} />
        {/* <Sidebar left></Sidebar> */}
        {/* <p>HomeSTyling</p>
        <CVform></CVform> */}
        {/* <Sidebar right></Sidebar> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

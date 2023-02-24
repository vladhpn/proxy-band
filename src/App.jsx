import { useEffect, lazy,Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { operation } from './redux/users';
import { Spinner } from './components/Spinner/Spinner';

const Users = lazy(() =>
  import('./page/Users' /* webpackChunkName: "Users-page" */),
);

const Posts = lazy(() =>
  import('./page/Posts' /* webpackChunkName: "Posts-page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.fetchUsers());
  }, [dispatch]);

  return (
       <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path='/' element={<Users />} />
        <Route path='posts/:id' element={<Posts />} />
        <Route path="*" element={<Users />} />
        </Routes>
        </Suspense>
  );
}

export default App;

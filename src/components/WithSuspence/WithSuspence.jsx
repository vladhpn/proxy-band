import { useSelector } from 'react-redux';

import { Spinner } from '../Spinner/Spinner';

export const WithSuspense = ({ children }) => {
    const loading = useSelector((state) => state.users.loadingReducer);
    
  return <>{loading ? <Spinner /> : children}</>;
};

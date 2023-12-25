import { useDispatch, useSelector } from 'react-redux';
import { sendQueryAsync } from '../redux/actions/graphqlActions';

const useQuery = queryObject => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.graphql);

  const sendQuery = () => {
    dispatch(sendQueryAsync(queryObject));
  };

  return { data, loading, error, sendQuery };
};

export default useQuery;

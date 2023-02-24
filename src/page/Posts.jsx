import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Container } from '../components/Container/Container';
import { Header } from '../components/Header/Header';
import { PostCard } from '../components/PostCard/PostCard';
import { WithSuspense } from '../components/WithSuspence/WithSuspence';

import { operation } from '../redux/users';

const Posts = () => {
  const { id } = useParams();
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.fetchPosts(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Header title='POSTS' />
      <WithSuspense>
         <PostCard />
      </WithSuspense>
     
    </Container>
  );
};

export default Posts;

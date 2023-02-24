import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../components/Container/Container';
import { Header } from '../components/Header/Header';
import { Modal } from '../components/Modal/Modal';
import { UserCard } from '../components/UserCard/UserCard';
import { Albums } from '../components/Albums/Albums';

import { operation } from '../redux/users';
import { WithSuspense } from '../components/WithSuspence/WithSuspence';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <Header title='USERS' />

      <WithSuspense>
        <UserCard />
      </WithSuspense>

      <Modal>
        <Albums />
      </Modal>
    </Container>
  );
};

export default Users;

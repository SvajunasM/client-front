import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';
import Container from '../components/Container/Container';
import LoadElement from '../components/LoadElement/LoadElement';
import Span from '../components/Span/Span';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function removeClient(id) {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/delete/${id}`, {
      method: 'DELETE',
    });
    const result = await res.json();
    console.log('result ===', result);
    if (result.success) {
      alert(result.data);
      const newArr = data.filter((obj) => obj.client_id !== id);
      setData(newArr);
    }
    if (!result.success) {
      alert(result.error);
    }
  }

  async function fetchData() {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const result = await res.json();
    if (result.success) {
      setData(result.data);
      setLoading(false);
    }
    if (!result.success) {
      setSession(false);
    }
  }

  if (!session) {
    return (
      <Container>
        <h2>Session timeout</h2>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <LoadElement />
      </Container>
    );
  }

  if (data.length === 0) {
    return (
      <Container>
        <h2>No clients stored</h2>
      </Container>
    );
  }

  return (
    <>
      <Span>Total client count : {data.length}</Span>
      <CardList data={data} test={removeClient} />
    </>
  );
}

export default Home;

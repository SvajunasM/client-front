import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';
import Container from '../components/Container/Container';
import LoadElement from '../components/LoadElement/LoadElement';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const result = await res.json();
    console.log('result ===', result);
    if (result.success) {
      setData(result.data);
      setLoading(false);
    }
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

  return <CardList data={data} />;
}

export default Home;


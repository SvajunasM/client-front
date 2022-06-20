import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';
import Container from '../components/Container/Container';

function Home() {
  const [data, setData] = useState([]);

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
    if (result.success) setData(result.data);
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

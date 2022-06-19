import React, { useEffect, useState } from 'react';
import Table from '../components/Table/Table';

function Home() {
  const [data, setData] = useState();

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
    console.log(data);
  }

  return <Table />;
}

export default Home;

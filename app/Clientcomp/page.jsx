'use client';
import { useEffect, useState } from 'react';
export default function EmailChecker() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://disify.com/api/email/your@example.com');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Email Validation</h1>
      <p>Format valid: {data.format ? 'Yes' : 'No'}</p>
      <p>Disposable: {data.disposable ? 'Yes' : 'No'}</p>
      <p>Domain: {data.domain}</p>
      <p>MX records live: {data.dns ? 'Yes' : 'No'}</p>
    </div>
  );
}

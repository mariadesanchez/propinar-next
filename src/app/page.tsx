'use client'
import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState('');

  const handleTransfer = async () => {
    try {
      const response = await fetch('/api/mercadoPago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Ingrese la cantidad a transferir"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transferir</button>
    </div>
  );
}


'use client';
// Checkout.tsx
import { useState } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import TextFieldComponent from './components/textFieldComponent';
import ButtonComponent from './components/buttonComponent';

const Checkout: React.FC = () => {
  initMercadoPago(process.env.NEXT_PUBLIC_ACCESS_TOKEN ??'', {
    locale: 'es-AR',
  });

  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [unitPriceInput, setUnitPriceInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const createPreference = async (): Promise<void> => {
    // ... tu lógica aquí ...
  };

  const handleBuy = async (): Promise<void> => {
    // ... tu lógica aquí ...
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUnitPriceInput(event.target.value);
  };

  return (
    <div>
      <TextFieldComponent
        value={unitPriceInput}
        onChange={handlePriceChange}
        error={error}
      />
      {preferenceId ? (
        <Wallet initialization={{ preferenceId, redirectMode: 'self' }} />
      ) : (
        <ButtonComponent onClick={handleBuy} />
      )}
    </div>
  );
};

export default Checkout;

'use client';
import axios from "axios";
import { useState } from 'react';

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

import TextFieldComponent from '../components/textFieldComponent';
import ButtonComponent from '../components/buttonComponent';

export default function Checkout() { // Removed async keyword from the function declaration
  initMercadoPago(process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? '', {
    locale: 'es-AR',
  });

  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [unitPriceInput, setUnitPriceInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const createPreference = async (): Promise<string> => { // Added return type for createPreference function
    const unitPrice = parseFloat(unitPriceInput);

    if (isNaN(unitPrice) || unitPrice <= 0) {
      setError("El valor de la propina debe ser mayor a 0.");
      return ''; // Return an empty string if there is an error
    } else {
      setError("");
    }

    const product = {
      title: "propina",
      unit_price: unitPrice,
      quantity: 1,
    };

    try {
      const url_preference = "api/mercadoPago";
   
      let response = await axios.post(url_preference, {
        items: [product],
        shipment_cost: 0,
      });

      const { id } = response.data;
   
      return id;
    } catch (error) {
      console.error(error); // Changed console.log to console.error for error handling
      return ''; // Return an empty string if there is an error
    }
  };

  const handleBuy = async (): Promise<void> => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUnitPriceInput(event.target.value);
  };

  return (
    <div>
      <TextFieldComponent
        value={unitPriceInput}
        onChange={handlePriceChange}
        error={error} label={''} />
      {preferenceId ? (
        <Wallet initialization={{ preferenceId, redirectMode: 'self' }} />
      ) : (
        <ButtonComponent onClick={handleBuy} />
      )}
    </div>
  );
}

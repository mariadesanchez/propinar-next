import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { items, shipment_cost } = req.body;

            const preference = {
                items,
                back_urls: {
                    success: 'https://propinare.vercel.app/Checkout',
                    failure: 'https://propinare.vercel.app/Checkout',
                    pending: '',
                },
                auto_return: 'approved',
                shipments: {
                    cost: shipment_cost,
                    mode: 'not_specified',
                },
            };

            const response = await mercadopago.preferences.create(preference);
            const { id } = response.body;

            res.json({ id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error en la creación de la preferencia' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
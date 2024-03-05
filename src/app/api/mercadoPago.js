import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: process.envNEXT_PUBLIC_MERCADO_PAGO_ACCESS_TOKEN,
});

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://propinar-next.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'POST') {
        try {
            const { items, shipment_cost } = req.body;

            const preference = {
                items,
                back_urls: {
                    success: 'propinar-next.vercel.app',

                    failure: 'propinar-next.vercel.app',
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
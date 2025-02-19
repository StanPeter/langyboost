import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { message, stack } = req.body;
        // await logError(new Error(message), { stack });

        return res.status(200).json({ message: 'Error logged successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

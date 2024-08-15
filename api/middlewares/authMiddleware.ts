import { config } from 'dotenv';

config();

const apiKey = process.env.API_KEY as string;

export async function authMiddleware(req: Request) {
    const key = req.headers.get('api-key');

    if (!key || key !== apiKey) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    return null;  // Indicating that the request can proceed
}

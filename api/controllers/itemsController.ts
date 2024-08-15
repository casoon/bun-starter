import { fetchAllItems, createNewItem } from '../services/itemService';
import { authMiddleware } from '../middlewares/authMiddleware';

export async function getItems(req: Request): Promise<Response> {
    const authResponse = await authMiddleware(req);
    if (authResponse) return authResponse;

    try {
        const items = await fetchAllItems();
        return new Response(JSON.stringify(items), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }catch (error) {
            const errorMessage = (error as Error).message || 'Unknown error';
            return new Response(JSON.stringify({ error: errorMessage }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    }
}

export async function createItem(req: Request): Promise<Response> {
    const authResponse = await authMiddleware(req);
    if (authResponse) return authResponse;

    try {
        const { name } = await req.json() as { name: string };
        const newItem = await createNewItem(name);
        return new Response(JSON.stringify(newItem), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        const errorMessage = (error as Error).message || 'Unknown error';
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

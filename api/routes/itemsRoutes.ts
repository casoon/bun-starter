import { getItems, createItem } from '../controllers/itemsController';
import { authMiddleware } from '../middlewares/authMiddleware';

export function itemsRoutes(req: Request) {
    const url = new URL(req.url);

    if (url.pathname === '/api/items' && req.method === 'GET') {
        return authMiddleware(req).then((authResponse) => {
            if (authResponse) return authResponse;
            return getItems(req);
        });
    }

    if (url.pathname === '/api/items' && req.method === 'POST') {
        return authMiddleware(req).then((authResponse) => {
            if (authResponse) return authResponse;
            return createItem(req);
        });
    }

    return new Response('Not Found', { status: 404 });
}

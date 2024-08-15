// index.ts
import { serve } from 'bun';
import { getItems, createItem } from './controllers/itemsController';

serve({
    fetch(req: Request) {
        const url = new URL(req.url);

        if (url.pathname === '/api/items' && req.method === 'GET') {
            return getItems(req);
        }

        if (url.pathname === '/api/items' && req.method === 'POST') {
            return createItem(req);
        }

        return new Response('Not Found', { status: 404 });
    },
    port: 3000,
});

console.log('Server läuft auf http://localhost:3000');

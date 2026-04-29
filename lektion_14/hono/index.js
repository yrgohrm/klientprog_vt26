import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { iterate } from 'fibonacci'

const app = new Hono();
app.get('/:iterations', (c) => {
    const iterations = parseInt(c.req.param("iterations"))
    if (isNaN(iterations) || iterations > 5000) {
        const error = { message: 'Bad Input' };
        throw new HTTPException(400, error);
    }
    
    return c.json(iterate(iterations));
})

serve(app);

import { type Request, type Response, Router } from 'express';

const healthRoutes: Router = Router();

healthRoutes.get('/', (req: Request, res: Response): void => {
  res.status(200).json({ message: 'OK' });
});

export { healthRoutes };

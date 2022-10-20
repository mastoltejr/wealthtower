import { Router, Request, Response, NextFunction } from 'express';
var router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log('in V1');
  next();
});
router.use('/transactions', require('./transactions/transactions'));

router.get('/test', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send('yay');
});

module.exports = router;

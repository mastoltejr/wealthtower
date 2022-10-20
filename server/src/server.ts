import express, {
  RequestHandler,
  Request,
  Response,
  NextFunction
} from 'express';
require('dotenv').config();

const server = express();
server.use(express.json());

const logger: RequestHandler = (req, res, next) => {
  console.log('================================');
  console.log(`${req.url}: ${new Date()}`);
  console.log(req.params ?? 'No Params');
  console.log(req.body ?? 'Empty Body');
  next();
};

server.use(logger);
server.use('/v1', require('./v1/index'));

server.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.status(200).send('yay')
);

server.listen(process.env.PORT, () => {
  console.log('Server listening on port ' + process.env.PORT);
  console.log(server.routes);
});

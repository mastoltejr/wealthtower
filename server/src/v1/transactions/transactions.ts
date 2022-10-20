import multer from 'multer';
import { Router, Request, Response, NextFunction } from 'express';
import { mkdirSync, existsSync } from 'fs';
import { extname } from 'path';
import { parseCSV } from '../util';
var { customAlphabet } = require('nanoid');
const nanoid = customAlphabet(
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  12
);
var router = Router();
// var { nanoid } = require('nanoid');

const transactionUploadHandler = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      let path = `../uploads/transactions`;
      !existsSync(path) && mkdirSync(path);
      callback(null, path);
    },
    filename: (req, file, cb) => {
      cb(null, nanoid(12) + extname(file.originalname));
    }
  }),
  fileFilter: (req, file, cb) => {
    return file.mimetype === 'text/csv' ? cb(null, true) : cb(null, false);
  }
});

router.get(
  '/parseUpload',
  transactionUploadHandler.single('transactions'),
  parseCSV,
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.body?.uploadData) {
      res.status(400).send('No file in body');
    }

    res.status(200).send(req.body.uploadData);
  }
);

module.exports = router;

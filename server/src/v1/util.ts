import multer from 'multer';
import { Request, Response, NextFunction } from 'express';
var { customAlphabet } = require('nanoid');
const nanoid = customAlphabet(
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  12
);
const fs = require('fs');
const { parse } = require('csv-parse');

const zip = (keys: string[], values: string[]) => {
  const N = values.length;
  return keys.reduce(
    (obj, key, k) => ({
      ...obj,
      [key]: k < N ? values[k] : undefined
    }),
    {}
  );
};

export const parseCSV = (req: Request, res: Response, next: NextFunction) => {
  var headers: string[] = [];
  var data: any[] = [];
  fs.createReadStream(req.file?.path)
    .pipe(parse({ delimiter: ',', from_line: 1 }))
    .on('data', function (row: string[]) {
      if (headers.length === 0) {
        headers = ['data-index', 'data-id', ...row];
        return;
      }

      data.push(zip(headers, [data.length, nanoid(12), ...row]));
    })
    .on('end', function () {
      req.body.uploadData = data;
      next();
    })
    .on('error', function (error: any) {
      res.status(400).send('Upload Error: ' + error?.message);
    });
};

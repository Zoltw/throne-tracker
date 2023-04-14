import { RequestHandler } from 'express';

export const invalidRoute: RequestHandler = (_req, res) => {
  res.contentType('text/plain');
  res.status(404).send('Invalid Route');
};

export const notImplemented: RequestHandler = (_req, res) => {
  res.sendStatus(501);
};

export const accessControl: RequestHandler = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('Origin') || '*');
  res.header('Vary', 'Origin');

  next();
};

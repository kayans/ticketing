import express from 'express';
import { currentUser } from '@ksticket/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  // Send back the currentUser Object with its payload
  // If currentUser is undefined, send back null
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };

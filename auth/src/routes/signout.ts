import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  // Empty information inside the cookie
  req.session = null;

  res.send({});
});

export { router as signoutRouter };

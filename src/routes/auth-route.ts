import { Router } from 'express';

import { login, register } from '../controllers/auth-controller';

const authRouter = Router();

authRouter.post('/register-user', register);
authRouter.post('/user-login', login);

export default authRouter;

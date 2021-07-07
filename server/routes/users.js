import express from 'express';
import { UserRepo } from '../services';
import { User, ConnectionError } from "../models"; 

export default userRouter = (app) => {
  const route = express.Router();

  app.use('/users', route);

  route.get('/:userId', async (req, res, next) => {
    try { 
      const user = await UserRepo.getUser(req.params.userId);
      res.send(user);
    } catch (error) {
      next(error);
    }
  });
  
  route.post('/', async (req, res, next) => {
  
    const userDetails = {
      ...req.body,
    };
  
    const user = new User(userDetails);
  
    let retryCount = 0;
  
    const handleCreateUser = async () => {
      try {
        await UserRepo.createUser(user);
      } catch (error) {
        // retry if connection error
        if (error instanceof ConnectionError) {
          if( retryCount < 3 ) {
            await handleCreateUser();
            retryCount++;
          }
        }
      }
    }
  
    try {
      await handleCreateUser();
    } catch (error) {
      next(error);
    }
  
    res.sendStatus(200);
  });
  
}

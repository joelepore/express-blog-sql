import express from 'express';
import { index, show, store, update, modify, destroy } from '../controllers/postsController.js';

const router = express.Router();

// Index
router.get('/', index);
// Show
router.get('/:id', show);
// Store
router.post('/', store);
// Update
router.put('/:id', update);
// Modify
router.patch('/:id', modify);
// Destroy
router.delete('/:id', destroy);

export default router;
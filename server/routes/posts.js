import express from 'express';
import {
  getPostsBySearch,
  getPosts,
  getPost,
  createPosts,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';
// middleware used to authorize a user's action
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;

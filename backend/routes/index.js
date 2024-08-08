import express from "express";
import BlogsController from "../controller/blog.js";
import UsersController from "../controller/user.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

//----------------- Blogs routes -----------------\\
router.get("/api/blogs", [auth], BlogsController.get);
router.get("/api/blogs/search", [auth], BlogsController.getSearch);
router.get("/api/blogs/:id", [auth], BlogsController.getById);
router.post("/api/blogs", [auth], BlogsController.post);
router.put("/api/blogs/:id", [auth], BlogsController.put);
router.delete("/api/blogs/:id", [auth], BlogsController.delete);


//----------------- Users routes -----------------\\
router.get('/api/users/profile', [auth], UsersController.getProfile);
router.post('/api/users/sign-up', UsersController.registerUser);
router.post('/api/users/sign-in', UsersController.loginUser);


export default router;

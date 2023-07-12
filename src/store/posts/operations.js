
import { postsSlice } from "./postsSlice";

const getPosts = () => {
    const { setPosts } = postsSlice.actions;
  
    return async (dispatch) => {
      try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  
        dispatch(setPosts(await posts.json()));
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  const getPostById = (id) => {
    const { setPost } = postsSlice.actions;
  
    return async (dispatch) => {
      try {
        const post = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
  
        dispatch(setPost(await post.json()));
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  const deletePost = (id) => {
    return async (dispatch) => {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        });
  
        dispatch(getPosts());
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  
  
  export const postsOp = {
    getPosts,
    getPostById,
    deletePost,
   
  };
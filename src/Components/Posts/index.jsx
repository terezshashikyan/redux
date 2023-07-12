import { useEffect } from "react";
import { PostCard } from "../../Components/PostCard";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { postsOp, postsSel } from "../../store/posts";


export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSel.postsListSelector);
  

  useEffect(() => {
    dispatch(postsOp.getPosts());
  }, [dispatch]);

  

  return (
    <div className="posts">
     
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
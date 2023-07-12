
import { useNavigate } from "react-router-dom";
import "./styles.css";



export const PostCard = (props) => {
  const { title, body, id } = props.post;
  const navigate = useNavigate();

  return (
    <div className="post-card" onClick={() => navigate(`${id}`)}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
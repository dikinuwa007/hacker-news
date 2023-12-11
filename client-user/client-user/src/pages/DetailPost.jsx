import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostIdStart } from "../stores/actions/actionCreator";

function DetailPost() {
  let [postForm, setPostForm] = useState({
    title: "",
    slug: "",
    content: "",
    imgUrl: "",
    categoryId: "",
    authorId: "",
    tag1: "",
    tag2: "",
    tag3: "",
    User: {},
    Tags: [],
  });
  let { id } = useParams();
  const idFromParams = () => {
    return id;
  };
  const dispatch = useDispatch();
  let post = useSelector((state) => state.postsIdReducer.data);
  useEffect(() => {
    id = idFromParams();
    dispatch(fetchPostIdStart(id));
  }, []);
  useEffect(() => {
    setPostForm(post);
  }, [post]);
  let posts = useSelector((state) => state.posts.data);
  let temp = posts.filter((el) => {
    if (el.id == id) {
      // console.log(el);
      return el;
    }
  });
  return (
    <>
      <div className="col">
        <article
          className="blog-post pl-6"
          style={{ paddingLeft: 10 + "vw", paddingRight: 10 + "vw" }}
        >
          <h2 className="blog-post-title">{postForm.title}</h2>
          <div className="row" style={{justifyContent:'space-between'}}>
          <div style={{justifyContent:'flex-start'}}>
          <p className="blog-post-meta">
            <i className="icon-calendar"></i>{String(post.createdAt).slice(0,10)} by <a href="#"><i className="icon-user"></i>{temp[0].User.username}</a>
          </p>
          </div>
          <div style={{justifyContent:'flex-end'}}>
          <p className="blog-post-meta">
            {temp[0].Tags[0].name} / {temp[0].Tags[1].name}
          </p>
          </div>
          </div>
          <img
            src={post.imgUrl}
            alt={post.title}
            style={{
              width: 70 + "vw",
              height: 40 + "vh",
              backgroundColor: "yellow",
            }}
          />

          <p>{post.content}</p>
          <hr />
          <pre>
            <code>
              {temp[0].Tags[0].name} {temp[0].Tags[1].name}
            </code>
          </pre>
        </article>
      </div>
    </>
  );
}
export default DetailPost;

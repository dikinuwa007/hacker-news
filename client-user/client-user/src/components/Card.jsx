import React from 'react';
import {Link} from 'react-router-dom'
const MyCard = ({post}) => {
  return (
<Link to={'/posts/'+post.id}>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={post.imgUrl} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <div className='row' style={{justifyContent:'space-between'}}>
        <p className="card-text" style={{ justifyContent: "flex-start" }}><small className="text-muted">{post.createdAt}</small></p>
        <p className="card-text" style={{ justifyContent: "flex-end" }}><small className="text-muted">{post.Tags[0].name} / {post.Tags[1].name}</small></p>
        </div>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  </div>
</div>
</Link>
  );
};

export default MyCard;

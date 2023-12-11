import { useEffect, useState } from "react";
import { fetchPostStart } from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "../components/Card";
import {Link} from 'react-router-dom';
import img from '../assets/react.svg'
import miniCard from "../components/miniCard";
function Home() {
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
  });
const background = {
background:`url(${img})`,
backgroundSize:'cover'
}
  const dispatch = useDispatch();
  let posts = useSelector((state) => state.posts.data);
  useEffect(() => {
    dispatch(fetchPostStart());
  }, []);
  useEffect(() => {
    setPostForm(posts);
    // console.log(posts);
  }, [posts]);

  return (
    <>
      <div
        className="row g-5 p-6"
        style={{ paddingLeft: 10 + "vw", marginRight: 10 + "vw" }}
      >
        <div
          className="p-4 p-md-5 mb-4 text-white rounded"
          style={background}
        >
          <div className="col-md-6 px-0" style={{color:'black'}}>
            <h1 className="display-4 fst-italic">
              The hacker
            </h1>
            <p className="lead my-3">
              The portal news for Cybersecurity, Malware, Virus, .etc.
              If you support us,
              Click the Support Button!
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Happy reading...
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-8">
          {/* card */}
          {/* {posts.map((el, index) => {
            const isLast = index === posts.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <TableRow
                post={el}
                index={index}
                classes={classes}
                key={index}
                deleteRow={deleteData}
              />
            );
          })} */}

          {posts.map((el) => (
              <MyCard post={el} key={el.id}/>
          ))}
        </div>

        <div className="col-md-4">
          {/* <div className="position-sticky" style="top: 2rem;"> */}
          <div className="position-sticky" style={{ top: { top } }}>
            {/* iklan */}
            <div className="card border-primary mb-3">
              <div className="card-header">Iklan</div>
              <div className="card-body text-primary">
                <h5 className="card-title">Iklan judul</h5>
                <p className="card-text">Iklan kontent</p>
              </div>
            </div>
            <div className="card border-primary mb-3">
              <div className="card-header">Iklan</div>
              <div className="card-body text-primary">
                <h5 className="card-title">Iklan judul</h5>
                <p className="card-text">Iklan kontent</p>
              </div>
            </div>
            {/* iklan */}
            <div className="p-4">
              <h4 className="fst-italic">Trending news</h4>
                  <miniCard/>
              <ol className="list-unstyled mb-0">
                
                <li>
                  <a href="#">February 2021</a>
                </li>
                <li>
                  <a href="#">January 2021</a>
                </li>
                <li>
                  <a href="#">December 2020</a>
                </li>
                <li>
                  <a href="#">November 2020</a>
                </li>
                <li>
                  <a href="#">October 2020</a>
                </li>
                <li>
                  <a href="#">September 2020</a>
                </li>
                <li>
                  <a href="#">August 2020</a>
                </li>
                <li>
                  <a href="#">July 2020</a>
                </li>
                <li>
                  <a href="#">June 2020</a>
                </li>
                <li>
                  <a href="#">May 2020</a>
                </li>
                <li>
                  <a href="#">April 2020</a>
                </li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Popular Resource</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

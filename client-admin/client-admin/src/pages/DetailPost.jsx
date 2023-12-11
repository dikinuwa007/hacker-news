import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCategoriesStart,
  fetchPostIdStart,
} from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
function DetailPost() {
  let [postForm, setPostForm] = useState({
    title: "",
    slug: "",
    content: "",
    imgUrl: "",
    categoryId: "",
    authorId: "",
    Tags: [{postId:'',name:''}],
  });
  let { id } = useParams();
  const idFromParams = () => {
    return id;
  };
  // const setForm = async (post) => {
  //   await setPostForm(post);
  // };

  const dispatch = useDispatch();
  let post = useSelector((state) => state.postsId.data);
  let categories = useSelector((state) => state.categories.data);
  let posts = useSelector((state)=>state.posts.data)
  posts = posts.filter(el=>{
    if(el.id==id){
    return el
    }
  })
  console.log(posts,'<<<<dari posts home');

  useEffect(() => {
    id = idFromParams();
    dispatch(fetchCategoriesStart());
    dispatch(fetchPostIdStart(id));
  }, []);

  // useEffect(() => {
  //   setPostForm(post);
  // }, [id]);


   useEffect(() => {
    setPostForm(post);
  }, [post]);
  function changeHandler(event) {
    const { name, value } = event.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    postForm.slug = postForm.title.split(" ").join("-");

    try {
      // let response = await fetch("https://news.apajalah.my.id/posts/" + id, {
      let response = await fetch("http://localhost:3000/posts/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(postForm),
      });
      if (response.ok === false) {
        response = await response.json();
        throw { message: response };
      }
      response = await response.json();
      Swal.fire(
        "Berhasil Merubah Post!",
        "Silahkan mengecek post yang baru terupdate!",
        "success"
      );
    } catch (error) {
      Swal.fire("Gagal Update Post!", `${error.message.message}`, "error");
      console.log(error, "ERRRORRR");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit post
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={submitHandler}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={postForm.title}
                  onChange={changeHandler}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Content
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  type="text"
                  value={postForm.content}
                  onChange={changeHandler}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="imgUrl"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  imgUrl
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={postForm.imgUrl}
                  onChange={changeHandler}
                  id="imgUrl"
                  name="imgUrl"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="categoryId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
              </div>
              <div className="mt-2">
                <select
                  value={postForm.categoryId}
                  id="categoryId"
                  name="categoryId"
                  onChange={changeHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {/* <option value="no" selected>--CHOOSE CATEGORY--</option> */}
                  {categories.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="tag1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  tag1
                </label>
              </div>
              <div className="mt-2">
                <input disabled
                  value={posts[0].Tags[0].name}
                  onChange={changeHandler}
                  id="tag1"
                  name="tag1"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="tag2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  tag2
                </label>
              </div>
              <div className="mt-2">
                <input disabled
                  value={posts[0].Tags[1].name}
                  onChange={changeHandler}
                  id="tag2"
                  name="tag2"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DetailPost;

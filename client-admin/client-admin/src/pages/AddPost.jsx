import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import usePost from "../hooks/postPost";
import Swal from "sweetalert2";
import { fetchCategoriesStart } from "../stores/actions/actionCreator";
function AddPost() {
  const [postForm, setPostForm] = useState({
    title: "",
    slug: "",
    content: "",
    imgUrl: "",
    categoryId: 0,
    authorId: "",
    tag1: "",
    tag2: "",
  });
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.categories.data);
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
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
      // let response = await fetch("https://news.apajalah.my.id/posts", {
      let response = await fetch("http://localhost:3000/posts", {
        method: "POST",
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
      Swal.fire(
        "Berhasil Menambahkan Post!",
        "Silahkan menambahkan post baru!",
        "success"
      );
    } catch (error) {
      Swal.fire(
        "Something Wrong!",
        `${error.message.message}`,
        "error"
      );
      console.log(error, "ERRRORRR");
    }
  };

  return (
    <>
      {/*

      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Post a New Thing
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
                  value={postForm.email}
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
                  htmlFor="tag1"
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
                  <option value="no" selected>--CHOOSE CATEGORY--</option>
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
                <input
                  value={postForm.tag1}
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
                <input
                  value={postForm.tag2}
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

export default AddPost;

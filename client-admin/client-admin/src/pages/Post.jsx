import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useFetch from "../hooks/fetchPost";
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import {useDispatch} from "react-redux"
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsStart } from "../stores/actions/actionCreator";
const TABLE_HEAD = [
  "#",
  "Title",
  "Slug",
  "Content",
  "imgUrl",
  "Created At",
  "updated At",
  "Category",
  "Author",
  "Action",
];

function Posts(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPostsStart())
  },[])

  const { data: posts, error, loading, setData } = useFetch("posts");
  const sendDataToParent = (data) => {
    let goToPage = data;
    props.onPageFromPost(goToPage);
  };
  const deleteData = async (id) => {
    try {
      // let response = await fetch("https://news.apajalah.my.id/posts/" + id, {
      let response = await fetch("http://localhost:3000/posts/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });
      if (response.ok === false) {
        response = await response.json();  
        throw { message: response };
      }
      response = await response.json();
      let temp = posts.filter((el) => {
        if (el.id !== id) {
          return el;
        }
      });
      setData(temp);
            Swal.fire("Berhasil menghapus post!", "Success", "success");
    } catch (error) {
      Swal.fire("Upppsss.... Something Error happen!", "Error", "error");
      console.log(error, "ERRRORRR");
    }
  };

  return (
    <Card className="h-full w-full overflow-scroll">
      <Link
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to="/add"
      >
        Add Post New
      </Link>
      <table className="w-full min-w-max table-fixed text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {posts.map((el, index) => {
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
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default Posts;

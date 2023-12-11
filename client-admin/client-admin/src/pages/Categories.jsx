import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useFetch from "../hooks/fetchPost";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "../stores/actions/actionCreator";
import React from "react";
import Swal from "sweetalert2";
import logo from "../assets/react.svg"
const TABLE_HEAD = ["#", "Name", "Action"];

function Categories() {
  const [postForm, setPostForm] = useState({
    name: "",
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  }
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.categories.data);
  let loading = useSelector((state) => state.categories.loading); //cek ini nanti
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]); //awalnya kosong

  if (loading) { //awalnya gk ada
    <h1>Loading</h1>;
    <img src={logo} alt="loading..." />
    console.log('loading');
  }

  const deleteCategories = async (id) => {
    try {
      let response = await fetch("https://news.apajalah.my.id/categories/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response) {
        throw new Error("ERROR Delete");
      }
      response = await response.json();
      let temp = categories.filter((el) => {
        if (el.id !== id) {
          console.log(el);
          return el;
        }
      });
      dispatch(fetchCategoriesSuccess(temp));
      Swal.fire(
        "Berhasil Menghapus Category!",
        "Silahkan mencari kategori!",
        "success"
      );
    } catch (error) {
      Swal.fire("Upppsss.... Something Error happen!", "Error", "error");
      console.log(error, "ERRRORRR");
    }
  };
  const addCategory = async () => {
    try {
      let response = await fetch("https://news.apajalah.my.id/categories/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postForm),
      });
      if (!response) {
        throw new Error("ERROR ADD");
      }
      response = await response.json();
      postForm.name = "";
      handleOpen();
      Swal.fire(
        "Berhasil Menambahkan Category!",
        "Silahkan menambahkan category baru!",
        "success"
      );
      dispatch(fetchCategoriesStart());
    } catch (error) {
      Swal.fire("Upppsss.... Something Error happen!", "Error", "error");
      console.log(error, "ERRRORRR");
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <Card className="h-full w-full overflow-scroll">
      <Button
        onClick={handleOpen}
        className="flex w-30 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
      >
        Add Category
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={() => addCategory(name)}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Category
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter Category Name
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Name
            </Typography>
            <Input
              label="name"
              size="lg"
              id="name"
              name="name"
              type="text"
              value={postForm.name}
              onChange={changeHandler}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={() => addCategory(name)}
              fullWidth
              style={{ marginBottom: 12 }}
            >
              ADD
            </Button>
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              CANCEL
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      <table className="w-full min-w-max table-auto text-left">
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
          {/* {TABLE_ROWS.map(({ name, job, date }, index) => { */}
          {categories.map((el, index) => {
            const isLast = index === categories.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={el.name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {el.name}
                  </Typography>
                </td>

                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                    onClick={handleOpen}
                  >
                    Edit
                  </Typography>
                  <Typography
                    style={{ marginTop: 12 }}
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                    onClick={() => deleteCategories(el.id)}
                    // onClick={()=>{deleteFromTableRow(post.id)}}
                  >
                    Delete
                  </Typography>
                </td>
                {/* <td className={`${classes} bg-blue-gray-50/50`}>
                  
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default Categories;

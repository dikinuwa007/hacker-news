import { useState } from "react";
import  Navbar  from "../components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx"
import Posts from "../pages/Post.jsx"
import Register from "../pages/Register.jsx"
import Categories from "../pages/Categories.jsx"
import AddPost from "../pages/AddPost.jsx"
import { Outlet } from "react-router-dom";
function Dashboard(){

const [posts,setPosts] = useState([])
const [categories,setCategories] = useState([])
// const [tags,setTags] = useState([])
const [page,setPage]= useState('')

const handlePageFromNavbar=(data)=>{
    setPage(data)
}
const handlePageFromPost=(data)=>{
    console.log(data,'ini data dari post');
    setPage(data)
}

return (
    <>
{/* outletitu new */}
    <Navbar onPageFromNavbar={handlePageFromNavbar}></Navbar>
    <Outlet></Outlet>
</>
);
}


export default Dashboard;

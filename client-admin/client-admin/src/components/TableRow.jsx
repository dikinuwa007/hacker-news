import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function TableRow({post,index,classes,deleteRow}) {

const deleteFromTableRow = async (id) => {
    event.preventDefault();
      deleteRow(id)
  };
const editFromTableRow = async (id) => {
    event.preventDefault();
    
  };

  return (
    <>
      <tr key={name}>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {index}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {post.title}
          </Typography>
        </td>
        <td className={`${classes} bg-blue-gray-50/50`}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {post.slug}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {post.content}
          </Typography>
        </td>
        <td className={`${classes} bg-blue-gray-50/50`}>
          <img src={post.imgUrl} />
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {post.createdAt}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {post.updatedAt}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {post.Category.name}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {post.User.username}
          </Typography>
        </td>
        <td className={`${classes} bg-blue-gray-50/50`}>
          <Link
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-medium"
            to={'/post/'+post.id}
            onClick={()=>{ editFromTableRow(post.id)} }
          >
            Edit
          </Link>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-medium"
            style={{ marginTop: 12 }}
            onClick={()=>{deleteFromTableRow(post.id)}}
          >
            Delete
          </Typography>
        </td>
      </tr>
    </>
    // <span></span>
  );
}

export default TableRow;

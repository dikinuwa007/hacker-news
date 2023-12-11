import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>OOps!</h1>
      <p>Sorry , there was error</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        // let response = await fetch("https://news.apajalah.my.id/" + url, {
        let response = await fetch("http://localhost:3000/" + url, {
          method: "GET",
          headers: {
            "access_token": localStorage.access_token,
          },
        });

        if (response.ok === false) {
          response = await response.json();
          throw { message: response };
        }
        response = await response.json();
        setData(response);
      } catch (error) {
        setError(error.message.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [url]);
  return { data, loading, error, setData };
}
export default useFetch;

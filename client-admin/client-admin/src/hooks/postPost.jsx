import { useEffect, useState } from "react";
function usePost(url, postData) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const post = async () => {
      try {
        let response = await fetch("https://news.apajalah.my.id/" + url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        if (!response) {
          throw new Error("ERROR ADD");
        }
        response = await response.json()

        setData(response)
      } catch (error) {
        setError(error);
      }
    };
    post();
  }, [url, postData]);
  return { data, loading, error };
}
export default usePost
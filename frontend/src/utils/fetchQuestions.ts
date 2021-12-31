import { useEffect } from "react";

const FetchQuestions = () => {
  return useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log("data fetched and set to state", data);
        return data;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
};

export default FetchQuestions;

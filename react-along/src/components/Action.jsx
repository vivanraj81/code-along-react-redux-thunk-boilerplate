import axios from "axios"

const fetchDataAction = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => dispatch({ type: "fetch_data", payload: resp.data }))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export default fetchDataAction
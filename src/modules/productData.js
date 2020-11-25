import axios from "axios";

const getData = async () => {
 
  const response = await axios.get("/products", {
  });

  return response;
};

export { getData };

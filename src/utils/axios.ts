import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:2000",
});

// api.get("/products");
// api.get("/users");
// api.delete("/products/1");
// api.patch("/products/2");

// axios.get("http://localhost:2000/products");
// axios.get("http://localhost:2000/users");
// axios.delete("http://localhost:2000/products/1");
// axios.get("http://localhost:2000/products");

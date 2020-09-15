import axios from "axios";

export default {
getBooks: () => {
    return axios.get("/api/books");
},
searchBooks: (title) => {
    return axios.post("/search", {title: title});
},
addBook: (bookData) => {
    return axios.post("/api.books");
},
deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
}
}
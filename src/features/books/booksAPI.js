import http from "../../utility/axios"

export const fetchBooks = async () => {
    const response = await http.get('/books');
    return response;
}
import http from "../../utility/axios"

// book fetch api
export const fetchBooks = async (filters) => {
    const query = filters?.filter ? `?featured=${filters.filter}` : filters?.search ? `?q=${filters.search}` : "";
    const response = await http.get(`/books${query}`);
    return response.data;
};

// book create api
export const createBooks = async (data) => {
    const response = await http.post('/books', data);
    return response.data;
}

// book delete api
export const deleteBooks = async (id) => {
    await http.delete(`/books/${id}`);
    return id;
}

// book update api
export const updateBooks = async (data) => {
    const response = await http.put(`/books/${data.id}`, data);
    console.log('from action api', response.data);
    return response.data;
}
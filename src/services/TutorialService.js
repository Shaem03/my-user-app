import http from "../http-common";

const getAll = () => {
    return http.get("/users");
};

// const get = (id) => {
//     return http.get(`/tutorials/${id}`);
// };

const create = (data) => {
    return http.post("/users", data);
};

// const update = (id, data) => {
//     return http.put(`/tutorials/${id}`, data);
// };

// const remove = (id) => {
//     return http.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//     return http.delete(`/tutorials`);
// };


const TutorialService = {
    getAll,
    create,
};

export default TutorialService;
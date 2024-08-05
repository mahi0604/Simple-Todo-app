const BASE_URL = "http://localhost:3000/api/";
export const apiRoutes = {
  todo: {
    get: {
      query: "GET_TODOS",
      method: "GET",
      url: `${BASE_URL}/todo`,
    },
    post: {
      query: "POST_TODOS",
      method: "POST",
      url: `${BASE_URL}/todo`,
    },
    delete: {
      query: "DELETE_TODOS",
      method: "DELETE",
      url: `${BASE_URL}/todo`,
    },
  },
};

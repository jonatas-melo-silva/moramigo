import { create } from 'axios';

const api = create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_PROD
});

export default api;

// const getHttpHeaders = authenticationToken => {
//   return (headers = {
//     Authorization: authenticationToken
//   });
// };


// const API = (create = (authenticationToken) => {
//   const instance = create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL_DESEV,
//     headers: getHttpHeaders(authenticationToken)
//   });

//   const search = (path, params) => instance.get(`${path}/`, params);SearchWithFilter

//   const searchPersons = path => instance.get(`${path}/`);

//   const searchPerson = (path, id) => instance.get(`${path}/${id}`);

//   const checkRequest = (path, id) => instance.get(`${path}/`, id);

//   const interestRequest = (path, body) => instance.post(`${path}`, body);

//   const interestAccept = (path, id, body) => instance.put(`${path}/${id}`, body);

//   const interestRefuse = (path, id) => instance.delete(`${path}/${id}`);

//   const listsPendant = path => instance.get(`${path}`);

//   const listsConfirmed = path => instance.get(`${path}`);
// });

// export { API, api };

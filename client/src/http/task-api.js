import api from './api';

const apiPath = import.meta.env.VITE_API_PATH;
const resource = apiPath + '/tasks';

export const allTasks = () => api.get(resource);
export const createTasks = (task) => api.post(resource, task);
export const updateTasks = (id, task) => api.put(`${resource}/${id}`, task);
export const deleteTasks = (id) => api.delete(`${resource}/${id}`);
export const completeTask = (id, task) => api.put(`${resource}/${id}/status`, task);

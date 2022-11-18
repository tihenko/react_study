import { axiosService } from './axios.service';
import urls from '../constants/urls';


export const usersService = {
  getAll: async () => await axiosService.get('https://jsonplaceholder.typicode.com/users')
}

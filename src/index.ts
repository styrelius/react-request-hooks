import axios from 'axios';

export { useQuery } from './use-query';
export { useQueryLater } from './use-query-later';

axios.defaults.withCredentials = true;

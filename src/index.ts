import axios from 'axios';

export { useQuery } from './use-query';
export { useQueryLater } from './use-query-later';
export { useMutation } from './use-mutation';

axios.defaults.withCredentials = true;

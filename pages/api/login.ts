import makeApiCall from '../../utils/api';
import useSWR from 'swr';

export default function Login(username: string, password: string, region: string) {
  const { data, error, isValidating } = useSWR(`/customer/login`, fetchLogin);

  return {
    data,
    loading: !data && !error,
    isValidating,
  };
}

async function fetchLogin(url: string) {
  const { data } = await makeApiCall<{
    data?: Auth.LoginResponse;
  }>(url);
  return data;
}

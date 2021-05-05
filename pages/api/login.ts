/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import makeApiCall from '../../utils/api';
import useSWR from 'swr';

export default function useLogin(username: string, password: string, region: string) {
  const { data, error, isValidating } = useSWR(`/customer/login`, fetchLogin);

  return {
    data: data[0],
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

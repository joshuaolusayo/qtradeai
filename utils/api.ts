import axios, { AxiosRequestConfig } from 'axios';
import cookie from 'js-cookie';

const token = cookie.get('token');
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

async function makeApiCall<T = any>(
  url: string,
  method: AxiosRequestConfig['method'] = 'get',
  payload?: AxiosRequestConfig['data'],
  axiosRequestConfig?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
): Promise<T> {
  try {
    const { data } = await axios({
      url,
      method,
      data: payload,
      ...axiosRequestConfig,
      baseURL: process.env.NEXT_PUBLIC_BASEURL,
    });
    return data;
  } catch (error) {
    // use the server error response if available
    if (error.response) {
      const serverMessage: string = error.response?.data?.message;

      // This will throw an error on the sever side because window is undefined

      // if (error.response.status === 401 && typeof window !== 'undefined') {
      //   window.localStorage.setItem('logout', Date.now().toString());
      //   window.location.assign('/auth/login');
      // }

      throw new Error(serverMessage);
    }
    // throw errors that happen in the browser as is
    throw new Error(error.message);
  }
}

export default makeApiCall;

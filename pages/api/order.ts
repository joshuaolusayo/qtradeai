/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr';
import makeApiCall from '../../utils/api';

export default function useOrders() {
  const { data, error, isValidating, revalidate } = useSWR(
    `/customer/get/orders/0/9898989898989898`,
    fetchOrders
  );

  return {
    ordersData: data?.data,
    loading: !data && !error,
    isValidating,
    revalidate,
  };
}

async function fetchOrders(url: string) {
  const { content } = await makeApiCall<{
    message: string;
    content?: Orders.GetOrders;
  }>(url);
  return content;
}

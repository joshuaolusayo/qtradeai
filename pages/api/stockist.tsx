/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr';
import makeApiCall from '../../utils/api';

export default function useStockist() {
  const { data, error, isValidating, revalidate } = useSWR(`/get/partner/-/-/-/-`, fetchStockist);

  return {
    stockistData: data?.data,
    loading: !data && !error,
    isValidating,
    revalidate,
  };
}

async function fetchStockist(url: string) {
  const { content } = await makeApiCall<{
    message: string;
    content?: Stockist.GetStockist;
  }>(url);
  return content;
}

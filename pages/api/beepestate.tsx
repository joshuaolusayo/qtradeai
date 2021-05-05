/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr';
import makeApiCall from '../../utils/api';

export default function useBeepEstate() {
  const { data, error, isValidating, revalidate } = useSWR(
    `/get/beepestate-packages`,
    fetchBeepEstate
  );

  return {
    beepEstateData: data?.data,
    loading: !data && !error,
    isValidating,
    revalidate,
  };
}

async function fetchBeepEstate(url: string) {
  const { content } = await makeApiCall<{
    message: string;
    content?: BeepEstate.GetBeepEstate;
  }>(url);
  return content;
}

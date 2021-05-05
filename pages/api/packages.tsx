/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr';
import makeApiCall from '../../utils/api';

export default function usePackages() {
  const { data, error, isValidating, revalidate } = useSWR(`/get/packages`, fetchPackages);

  return {
    packagesData: data?.data,
    loading: !data && !error,
    isValidating,
    revalidate,
  };
}

async function fetchPackages(url: string) {
  const { content } = await makeApiCall<{
    message: string;
    content?: Packages.GetPackages;
  }>(url);
  return content;
}

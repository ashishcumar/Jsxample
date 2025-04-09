import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useSwrHook = (url?: string) => {
  const shouldFetch = !!url;

  const { data, error, isLoading } = useSWR(shouldFetch ? url : null, fetcher, {
    revalidateOnFocus: false,
  });

  return { data, error, isLoading };
};

export default useSwrHook;

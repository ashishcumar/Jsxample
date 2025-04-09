import useSWRMutation from "swr/mutation";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const useSwrMutationHook = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "dynamic-key", 
    (_, { arg }: { arg: string }) => fetcher(arg),
    {
      revalidate: true, // no revalidation unless you want it
    }
  );

  return {
    triggerFetch: trigger, // use this to manually trigger with a URL
    data,
    error,
    isLoading: isMutating,
  };
};

export default useSwrMutationHook;

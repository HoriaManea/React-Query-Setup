export function App() {
  const { data, isLoading, isError, status, isFetching } = useQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreadspi.com/products");
      if (!res.ok) console.log(new Error("Network response was not ok"));
      return res.json();
    },
    retry: 2, /////// Here
  });
}

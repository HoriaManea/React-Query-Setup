import { queryOptions } from "@tanstack/react-query";

function groupOptions(id: number) {
  return queryOptions({
    queryKey: ["groups", id],
    queryFn: () => fetchGroups(id),
    staleTime: 5 * 1000,
  });
}

// usage:

useQuery(groupOptions(1));
useSuspenseQuery(groupOptions(5));
useQueries({
  queries: [groupOptions(1), groupOptions(2)],
});
queryClient.prefetchQuery(groupOptions(23));
queryClient.setQueryData(groupOptions(42).queryKey, newGroups);

// Idea e ca folosim queryOptions pentru a nu mai folosi functia basic din reactQuery
// Cu acest putem face totul mai custom
// Putem impartii codul in mai multe fisiere de exemplu fetchGroups vine din alt fisier
// Nu mai repeți peste tot queryKey, queryFn, staleTime.
// Dacă vrei să schimbi ceva (ex: staleTime → 10 secunde), modifici doar în group.queries.ts și toate componentele care folosesc acel query se actualizează automat.
// 
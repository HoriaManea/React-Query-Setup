import { useQuery } from "@tanstack/react-query";
import { groupOptions } from "../queries/group.queries";

export function GroupList() {
  const { data, isLoading } = useQuery(groupOptions(1));

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Group Name: {data.name}</h2>
    </div>
  );
}

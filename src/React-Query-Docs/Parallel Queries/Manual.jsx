export function Manual() {
  // The following queries will execute in parallel
  const usersQuery = useQuery({ queryKey: ["users"], queryFn: fetchUsers });
  const teamsQuery = useQuery({ queryKey: ["teams"], queryFn: fetchTeams });
  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
}

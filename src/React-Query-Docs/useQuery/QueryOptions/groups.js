export async function fetchGroups(id: number) {
  const res = await fetch(`/api/groups/${id}`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
}

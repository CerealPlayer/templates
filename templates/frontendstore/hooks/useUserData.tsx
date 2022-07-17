import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

const MILISECONDS_IN_ONE_MINUTE = 1000 * 60;

export function useUserData() {
  const { data } = useSession();
  const { data: userData, error, isLoading } = useQuery(['user-data', data], async ({ queryKey }) => {
    const data = queryKey[1] as Session;
    const request = await fetch(`/api/users/${data.user?.email}/getdata`);
    console.log(request.status)
    if (!request.ok) throw new Error("Couldn't connect to user endpoint")
    return await request.json();
  }, { enabled: !!data, staleTime: MILISECONDS_IN_ONE_MINUTE });

  return { userData, error, isLoading }
}
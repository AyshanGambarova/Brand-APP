"use client";

import { CircularProgress, Typography } from "@mui/material";
import useUserDetails from "@/hooks/useUserDetails";

type Props = {
  params: {
    userId: string;
  };
};

export default function UserDetails({ params }: Props) {
  const { userId } = params;
  const { data: user, isLoading, error } = useUserDetails(userId);

  if (isLoading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      {user && (
        <>
          <Typography variant="h5">{user?.name}</Typography>
          <Typography variant="body1">Username: {user?.username}</Typography>
          <Typography variant="body1">Email: {user?.email}</Typography>
          <Typography variant="body1">Phone: {user?.phone}</Typography>
          <Typography variant="body1">Website: {user?.website}</Typography>
          <Typography variant="body1">
            Company: {user?.company?.name}
          </Typography>
        </>
      )}
    </>
  );
}

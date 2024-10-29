import { getUsers } from "@/hooks/useUsers"; // Adjust this import as necessary
import { User } from "@/types"; // Import the User type if needed
import { Box, CircularProgress } from "@mui/material";
import Slider from "./components/slider";

const UsersPage = async () => {
  let users: User[] | undefined;
  let error: Error | null = null;
  let isLoading = true;

  try {
    users = await getUsers();
    isLoading = false;
  } catch (err) {
    error = err as Error;
    isLoading = false;
  }

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Slider users={users} />
    </>
  );
};

export default UsersPage;

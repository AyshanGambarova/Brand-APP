"use client";

import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import useUsers from "@/hooks/useUsers";
import Link from "next/link"; // Your custom hook

const UsersPage = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Grid container spacing={2}>
        {users?.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <Card sx={{ height: "100%", position: "relative" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {user.email}
                </Typography>
              </CardContent>
              <div className="flex justify-end items-center mb-3 mr-3">
                <Button variant="contained" color="primary">
                  <Link href={`/users/${user.id}`}> More</Link>
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UsersPage;

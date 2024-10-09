"use client";

import useUserDetails from "@/hooks/useUserDetails";
import { Business, Email, Language, Person, Phone } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors"; // Optional for avatar background color

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
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>

        {user && (
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                {/* Avatar on the left */}
                <Grid
                  item
                  xs={12}
                  sm={4}
                  className="flex justify-center items-center"
                >
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      bgcolor: deepPurple[500], // Optionally set background color
                      fontSize: "2rem",
                    }}
                  >
                    {user?.name.charAt(0)}
                  </Avatar>
                </Grid>

                {/* User Info on the right */}
                <Grid
                  item
                  xs={12}
                  sm={8}
                  className="flex flex-col justify-center"
                >
                  <Typography
                    variant="h5"
                    className="font-bold mb-3 text-center"
                  >
                    {user?.name}
                  </Typography>
                  <div className="flex items-center justify-center mb-2">
                    <Person className="mr-2 text-red-500" />
                    <Typography variant="body1">{user.username}</Typography>
                  </div>

                  {/* Contact Information */}
                  <div className="flex items-center justify-center mb-2">
                    <Email className="mr-2 text-blue-500" />
                    <Typography variant="body1">
                      <a href={`mailto:${user?.email}`} className="underline">
                        {user?.email}
                      </a>
                    </Typography>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Phone className="mr-2 text-green-500" />
                    <Typography variant="body1">
                      <a href={`tel:${user?.phone}`} className="underline">
                        {user?.phone}
                      </a>
                    </Typography>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Language className="mr-2 text-orange-500" />
                    <Typography variant="body1">
                      <a
                        href={`http://${user?.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {user?.website}
                      </a>
                    </Typography>
                  </div>

                  {/* Company Information */}
                  <div className="flex items-center justify-center mb-2">
                    <Business className="mr-2 text-gray-600" />
                    <Typography variant="body1">
                      {user?.company?.name}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

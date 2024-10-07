"use client";
import useUsers from "@/hooks/useUsers";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Slider from "react-slick";
import "./style.css";

const UsersPage = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  // Settings adjusted for MUI Grid breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1536, // xl: ≥ 1536px (Extra large screens)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200, // lg: ≥ 1200px (Large screens)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900, // md: ≥ 900px (Medium screens)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // sm: ≥ 600px (Small screens)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 0, // xs: < 600px (Extra small screens, mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="slider-container pt-5 pb-5">
        <Slider {...settings}>
          {users?.map((user) => (
            <Card sx={{ height: "100%", position: "relative" }} key={user.id}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {user?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user?.email}
                </Typography>
              </CardContent>
              <div className="flex justify-end items-center mb-3 mr-3">
                <Button variant="outlined" color="primary">
                  <Link href={`/users/${user?.id}`}> More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default UsersPage;

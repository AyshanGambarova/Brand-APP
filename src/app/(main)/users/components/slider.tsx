"use client";

import { User } from "@/types";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import Slider from "react-slick";
import "../style.css";

interface SliderProps {
  users: User[];
}

const ClientSlider: React.FC<SliderProps> = ({ users }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container pt-5 pb-5">
      <Slider {...settings}>
        {users.map((user) => (
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
  );
};

export default ClientSlider;

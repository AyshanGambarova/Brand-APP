"use client";

import usePhotos from "@/hooks/usePhotos"; // Import your custom hook
import { Photo } from "@/types/index";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRef } from "react";

const PhotosGrid = ({ initialPhotos }: { initialPhotos: Photo[] }) => {
  // Use the custom hook to fetch photos, passing initial data
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePhotos(initialPhotos);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastPhotoRef = (node: HTMLElement | null) => {
    if (isFetchingNextPage) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (node) observer.current.observe(node);
  };

  // Combine initial photos with additional fetched pages
  const photos = data?.pages.flatMap((page) => page) || [];

  return (
    <>
      <Grid container spacing={2}>
        {photos.map((photo: Photo, index: number) => {
          const isLastPhoto = index === photos.length - 1;
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={photo.id}
              ref={isLastPhoto ? lastPhotoRef : null}
            >
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  alt={photo.title}
                  height="140"
                  image={photo.thumbnailUrl}
                />
                <CardContent>
                  <Tooltip title={photo.title} disableHoverListener={false}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      noWrap
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {photo.title}
                    </Typography>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {isFetchingNextPage && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default PhotosGrid;

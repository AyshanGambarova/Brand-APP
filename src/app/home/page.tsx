"use client";

import { useCallback, useRef } from "react";
import usePhotos from "@/hooks/usePhotos";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { Photo } from "@/types";

export default function PhotosPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePhotos();
  const observer = useRef<IntersectionObserver | null>(null);

  const lastPhotoRef = useCallback(
    (node: HTMLElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage],
  );

  const photos =
    data?.pages.flatMap((page: any) => page.map((photo: Photo) => photo)) || [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
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
                  <Tooltip
                    title={photo.title}
                    disableHoverListener={false} // Always show tooltip
                  >
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
      {isFetchingNextPage && <CircularProgress />}
    </div>
  );
}

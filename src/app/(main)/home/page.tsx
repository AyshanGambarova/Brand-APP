import PhotosGrid from "@/app/(main)/home/components/photosGrid";

export default async function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
      <PhotosGrid initialPhotos={[]} />
    </>
  );
}

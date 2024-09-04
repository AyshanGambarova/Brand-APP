import { Metadata } from "next";

type Props = {
  params: {
    blogId: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Blog ${params.blogId}`,
  };
};

export default function BlogDetails({ params }: Props) {
  return (
    <>
      <div>Blog details</div>
      <div>{params.blogId}</div>
    </>
  );
}
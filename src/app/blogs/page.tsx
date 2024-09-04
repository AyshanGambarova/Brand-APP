import Link from "next/link";

export default function Blog() {
  const blogId = 10;
  return (
    <>
      <div className="font-bold">Blogs List page</div>
      <ul>
        <li>
          <Link href="/blogs/1">Blog 1</Link>
        </li>
        <li>
          <Link href="/blogs/2">Blog 2</Link>
        </li>
        <li>
          <Link href="/blogs/3">Blog 3</Link>
        </li>
        <li>
          <Link href="/blogs/4">Blog 4</Link>
        </li>
        <li>
          <Link href="/blogs/5">Blog 5</Link>
        </li>
        <li>
          <Link href={`/blogs/${blogId}`}>Blog dynamicId</Link>
        </li>
      </ul>
    </>
  );
}

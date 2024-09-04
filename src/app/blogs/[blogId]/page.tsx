export default function BlogDetails({params}: { params: { blogId: string } }) {
    return (
        <>
            <div>Blog details</div>
            <div>{params.blogId}</div>
        </>
    )
}
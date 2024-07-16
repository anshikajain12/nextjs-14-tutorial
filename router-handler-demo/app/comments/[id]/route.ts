// dynamic routing
import { comments } from "../data";
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const commentID = comments.find(comment => comment.id === parseInt(params.id))
    return Response.json(commentID)
}
//delete request
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    const deletedComment= comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
}
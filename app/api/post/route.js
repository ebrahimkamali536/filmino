
import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const posts = await Post.find({}).populate("creator");
    return new Response(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    return new Response("failed to fetch all posts", { status: 500 });
  }
};
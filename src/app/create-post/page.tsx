import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const CreatePost = async () => {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <Form />
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
};

export default CreatePost;

import { BsThreeDots } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
const SignlePost = ({ item }: { item: any }) => {
  let itemmage = 1;
  return (
    <div className="p-4 border-b border-slate-600">
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h1 className="text-md font-semibold">Md Tofaal Ahmed</h1>
            <h6 className="text-sm text-gray-500">@TofaalAhmed</h6>
          </div>
        </div>
        <div>
          <BsThreeDots className="text-slate-500 cursor-pointer" />
        </div>
      </div>
      <div className="mt-4">
        <div className="mb-2">
          <p className="text-sm text-gray-200">
            This is a post from the user. This is a post from the user. This is
            a post from the user. This is a post from the user. This is a post
          </p>
        </div>
        {itemmage ? (
          <Image
            width={500}
            height={500}
            src="https://github.com/shadcn.png"
            alt="asd"
            layout="responsive"
            className="mx-auto  rounded-md"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SignlePost;

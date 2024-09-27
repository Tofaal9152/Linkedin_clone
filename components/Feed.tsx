import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Image, Music2, Video } from "lucide-react";
import { FcDocument } from "react-icons/fc";
import SignlePost from "./SignlePost";

const Feed = () => {
  return (
    <div className="h-screen flex-1 overflow-y-auto w-full">
      {/* Header */}
      <div className="flex border-b border-slate-600 z-50 w-full text-lg justify-between sticky top-0 bg-black bg-opacity-30 backdrop-blur">
        <div className="hover:bg-[#181818] p-2 flex-1 cursor-pointer flex items-center justify-center">
          For you
        </div>
        <div className="hover:bg-[#181818]  p-2 flex-1 cursor-pointer flex items-center justify-center">
          Following
        </div>
      </div>
      {/*Create Post */}
      <div className="flex flex-col p-4 border-b border-slate-600 ">
        <div className="flex items-start border-b border-slate-600 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <textarea
            placeholder="What's happening?"
            className="bg-black text-white ml-4 w-full outline-none  resize-none h-24 p-2 rounded-lg"
          ></textarea>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center space-x-4 text-[#1C98EB]">
            <Image className="cursor-pointer" />
            <Video className="cursor-pointer" />
            <Music2 className="cursor-pointer" />
            <FcDocument size={25} className="cursor-pointer" />
          </div>
          <Button className="bg-[#1C98EB] hover:bg-[#1A8CD8] text-white text-sm rounded-2xl  p-4">
            Post
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center border-b border-slate-600 text-[#1C98EB] font-bold p-1 text-sm">
        Show 340 posts
      </div>
      {/* see post */}
      <div className="w-full ">
        {Array(10)
          .fill(0)
          .map((item, i) => (
            <SignlePost item={item} key={i} />
          ))}
      </div>
    </div>
  );
};

export default Feed;

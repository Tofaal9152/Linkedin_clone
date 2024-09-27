import Link from "next/link";
import { FaHome, FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User2 } from "lucide-react";
import { CgMore } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";

const LeftSidebar = () => {
  return (
    <div className="h-screen border-r border-slate-600  px-6 space-y-8 w-80">
      <Link href="/home" className="flex items-center mt-4">
        <FaXTwitter size={30} />
      </Link>
      <Link href="/home" className="flex space-x-6  items-center">
        <FaHome size={22} />
        <span className="text-xl font-semibold text-slate-300">Home</span>
      </Link>
      <Link href="/explore" className="flex space-x-5  items-center">
        <FaSearch size={22} />
        <span className="text-xl font-semibold text-slate-300">Explore</span>
      </Link>
      <Link href="/notifications" className="flex space-x-5  items-center">
        <FaBell size={22} />
        <span className="text-xl font-semibold text-slate-300">
          Notifications
        </span>
      </Link>
      <Link href="/messages" className="flex space-x-5  items-center">
        <FaEnvelope size={22} />
        <span className="text-xl font-semibold text-slate-300">Messages</span>
      </Link>
      <Link href="/messages" className="flex space-x-5  items-center">
        <User2 size={22} />
        <span className="text-xl font-semibold text-slate-300">Profile</span>
      </Link>
      <Link href="/messages" className="flex space-x-5  items-center">
        <BsPeople size={22} />
        <span className="text-xl font-semibold text-slate-300">
          Communities
        </span>
      </Link>
      <Link href="/messages" className="flex space-x-5  items-center">
        <CgMore size={22} />
        <span className="text-xl font-semibold text-slate-300">More</span>
      </Link>
      <Button className="bg-[#1C98EB] hover:bg-[#1A8CD8] text-white font-bold rounded-2xl text-lg w-full p-6">
        Post
      </Button>
      {/* profile */}
      <div className="flex pt-10 items-center space-x-4 w-full">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-sm font-semibold w-full">Md Tofaal Ahmed</h1>
          <h6 className="text-xs text-gray-500">@TofaalAhmed</h6>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

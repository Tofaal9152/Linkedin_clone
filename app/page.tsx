import Feed from "@/components/Feed";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

const Page = () => {
  return (
    <div className="mx-auto flex ">
      <LeftSidebar />
      <div className="flex w-full">
        <Feed  />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Page;
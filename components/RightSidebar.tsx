import { Search } from "lucide-react";

const RightSidebar = () => {
  return (
    <div className="h-screen  overflow-y-auto border-l border-slate-600 w-80">
      {/* search */}
      <div className="text-white bg-black sticky top-0 px-3">
        <div className="mx-auto rounded-xl mt-1 bg-[#202327]">
          <div className="relative rounded-xl flex items-center w-full h-12 focus-within:shadow-lg overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <Search />
            </div>
            <input
              className="peer h-full rounded-xl bg-[#202327] w-full outline-none text-sm  pr-2"
              type="text"
              id="Search"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      {/* adds and other */}
      <div className="p-4 ">
        {
            Array(10).fill(0).map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-[#202327] mb-2">
                    <div className="flex items-center space-x-2">
                        <img src="
                        https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="w-12 h-12 rounded-xl"/>
                        <div>
                            <h1 className="text-white font-semibold">Nature</h1>
                            <h6 className="text-gray-500">@Nature</h6>
                        </div>
                    </div>
                    <button className="bg-[#1C98EB] text-white rounded-lg px-3 py-1">Follow</button>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default RightSidebar;

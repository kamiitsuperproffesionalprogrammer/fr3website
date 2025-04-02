import React from "react";

export const SoundKit: React.FC = () => {
  return (
    <section id="soundkit" className="flex flex-col items-center px-0 py-7">
      <h2 className="text-[#636363] text-[32px] font-bold">SOUND KIT</h2>
      <div className="w-[292px] bg-white p-2">
        <button className="text-[#475467] text-xs px-2 py-0 w-full text-left hover:bg-gray-100">
          Task Board
        </button>
        <button className="text-[#475467] text-xs px-2 py-0 w-full text-left hover:bg-gray-100">
          Projects
        </button>
        <div className="flex flex-col px-2 py-0">
          <button className="text-[#475467] text-xs px-0 py-1 text-left hover:bg-gray-100">
            Clients
          </button>
          <div className="flex flex-col px-2 py-0">
            <button className="text-[#475467] text-xs pl-14 px-0 py-1 text-left hover:bg-gray-100">
              Acme Inc.
            </button>
            <div className="flex flex-col px-2 py-0">
              <button className="text-[#475467] text-xs pl-14 px-0 py-1 text-left hover:bg-gray-100">
                Project A
              </button>
              <button className="text-[#475467] text-xs pl-14 px-2 py-0 text-left hover:bg-gray-100">
                document.txt
              </button>
              <button className="text-[#475467] text-xs pl-14 px-2 py-0 text-left hover:bg-gray-100">
                proposal_final_final02_final
              </button>
            </div>
            <button className="text-[#475467] text-xs pl-14 px-2 py-0 text-left hover:bg-gray-100">
              Project B
            </button>
          </div>
        </div>
        <button className="text-[#475467] text-xs px-2 py-0 w-full text-left hover:bg-gray-100">
          Team
        </button>
        <button className="text-[#475467] text-xs px-2 py-0 w-full text-left hover:bg-gray-100">
          Other
        </button>
      </div>
    </section>
  );
};

import React from "react";

function SideNavChatCard({ conversation }) {
  const { profile, name, img, type, last_message, time } = conversation;
  return (
    <div className=" my-1 p-2 flex ">
      <div className="avatar mr-3">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <p className="text-base font-semibold"> {name}</p>
            <p className="text-sm text-slate-500"> {last_message}</p>
          </div>
          <div className="text-center text-xs text-slate-500">{time}</div>
        </div>
        <hr className="border-gray-300 rounded w-72" />
      </div>
    </div>
  );
}

export default SideNavChatCard;

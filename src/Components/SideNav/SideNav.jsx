import React from "react";
import { LuMessageSquarePlus } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import SideNavChatCard from "../SideNavChatCard/SideNavChatCard";
import { PiChatTextDuotone } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiWechatChannelsLine } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";

function SideNav() {
  const profiles = [
    {
      profile: 1,
      name: "Ali",
      img: "not available",
      type: "private",
      last_message: "hello",
      time: "yesterday",
    },
    {
      profile: 2,
      name: "ML Group",
      img: "not available",
      type: "group",
      last_message: "meeting tomorrow",
      time: "today",
    },
    {
      profile: 3,
      name: "Sara",
      img: "not available",
      type: "private",
      last_message: "how are you?",
      time: "yesterday",
    },
    {
      profile: 4,
      name: "Project 1",
      img: "not available",
      type: "group",
      last_message: "check the update",
      time: "2 days ago",
    },
    {
      profile: 5,
      name: "Emma",
      img: "not available",
      type: "private",
      last_message: "good night",
      time: "last week",
    },
    {
      profile: 6,
      name: "Code Review Team",
      img: "not available",
      type: "group",
      last_message: "please review the PR",
      time: "yesterday",
    },
    {
      profile: 7,
      name: "Michael",
      img: "not available",
      type: "private",
      last_message: "let's catch up",
      time: "3 days ago",
    },
    {
      profile: 8,
      name: "Marketing Group",
      img: "not available",
      type: "group",
      last_message: "campaign updates",
      time: "today",
    },
    {
      profile: 9,
      name: "Aisha",
      img: "not available",
      type: "private",
      last_message: "what's up?",
      time: "yesterday",
    },
    {
      profile: 10,
      name: "Frontend Team",
      img: "not available",
      type: "group",
      last_message: "new design mockups",
      time: "4 days ago",
    },
    {
      profile: 11,
      name: "James",
      img: "not available",
      type: "private",
      last_message: "got it",
      time: "yesterday",
    },
    {
      profile: 12,
      name: "UI/UX Group",
      img: "not available",
      type: "group",
      last_message: "wireframe update",
      time: "last week",
    },
    {
      profile: 13,
      name: "Sophia",
      img: "not available",
      type: "private",
      last_message: "thanks",
      time: "3 days ago",
    },
    {
      profile: 14,
      name: "Backend Devs",
      img: "not available",
      type: "group",
      last_message: "API fixes applied",
      time: "yesterday",
    },
    {
      profile: 15,
      name: "Ahmed",
      img: "not available",
      type: "private",
      last_message: "will call you",
      time: "2 weeks ago",
    },
  ];

  return (
    <div className="flex m-0 justify-between ">
      {/* ----- Right side icons Section ----- */}
      <div className="bg-base-300 w-2/12 min-h-screen py-4 flex flex-col justify-between">
        <div className="text-center">
          <PiChatTextDuotone className="text-2xl text-gray-500 mx-auto my-3" />
          <HiOutlineStatusOnline className="text-2xl text-gray-500 mx-auto my-3" />
          <RiWechatChannelsLine className="text-2xl text-gray-500 mx-auto my-3" />
          <MdGroups className="text-2xl text-gray-500 mx-auto my-3" />
        </div>
        <div className="text-center">
          <IoMdSettings className="text-2xl text-gray-500 mx-auto my-3" />
          <IoPersonCircle className="text-5xl text-gray-400 mx-auto my-3" />
        </div>
      </div>

      {/* ----- Chats Section -------- */}
      <div className="w-10/12 p-4">
        <div className="flex justify-between align-middle my-3">
          <div className="text-2xl font-bold">Chats</div>
          <div className="flex justify-between align-middle">
            <LuMessageSquarePlus className="font-bold text-xl mr-2" />
            <BsThreeDotsVertical className="font-bold text-xl" />
          </div>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <div className="my-3">
          <button className="px-3 py-1 rounded-xl text-sm bg-base-300 mx-1">
            All
          </button>
          <button className="px-3 py-1 rounded-xl text-sm bg-base-300 mx-1">
            Unread
          </button>
          <button className="px-3 py-1 rounded-xl text-sm bg-base-300 mx-1">
            Favourites
          </button>
          <button className="px-3 py-1 rounded-xl text-sm bg-base-300 mx-1">
            Groups
          </button>
        </div>

        {/* ----- All current chats list ------ */}
        <ul className=" fixed max-h-96 overflow-y-auto w-full">
          {/* Sidebar content here */}
          {profiles.map((conversation) => (
            <li className="my-2 " key={conversation.profile}>
              <SideNavChatCard conversation={conversation} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;

import React from "react";

export default function CardSection({ title, description }) {
  return (
    <aside className="h-full">
      <div className="text-white border-2 border-textColor mt-2 bg-[#1d1d1d] hover:bg-[#3a3a3a] py-6 px-4 h-full flex flex-col justify-between">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
          <path
            d="M17.091 8.18182L10.091 15.1818L6.90918 12"
            stroke="#00856F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h5 className="text-xl font-semibold mt-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </aside>
  )
}
import React from 'react';

export default function CardCategory({ categoryName, imagePath }) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 bg-slate-100  h-[96px] rounded-md pl-3 shadow-md">
      <div className="col-span-1 flex justify-center items-center">
        <img src={imagePath} alt={categoryName} className="w-[82px] h-[81px] rounded-md shadow-xl" />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <p className="text-xl font-semibold">{categoryName}</p>
      </div>
    </div>
  );
}

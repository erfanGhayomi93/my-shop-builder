import React from 'react';

export const ProductCard = ({ name }: { name: string }) => {
  return (
    <div className="rounded border p-4 shadow-sm bg-white">
      <h2 className="font-semibold bg-amber-600">{name}</h2>
    </div>
  );
};

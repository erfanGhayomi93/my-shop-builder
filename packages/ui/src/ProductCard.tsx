


export const ProductCard = ({ name }: { name: string }) => {
  return (
    <div className="rounded border p-4 shadow-sm bg-mint-500">
      <h2 className="font-semibold  mt-32">{name}</h2>
    </div>
  );
};

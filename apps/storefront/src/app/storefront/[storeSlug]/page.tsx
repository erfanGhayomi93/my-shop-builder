import React from 'react';
import { ProductCard } from '@myshop/ui';


interface Props {
  params: { storeSlug: string };
}

const StorefrontPage = ({ params }: Props) => {
  const { storeSlug } = params;

  return (  
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome to {storeSlug} store</h1>
      <p className="mt-4">اینجا محصولات فروشگاه نشون داده میشه.</p>

      <ProductCard name="مانیتور گیمینگ سامسونگ" />
    </main>
  );
};

export default StorefrontPage;

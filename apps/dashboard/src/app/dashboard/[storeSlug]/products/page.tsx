import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

interface Props {
  params: {
    storeSlug: string;
  };
}

const ProductsPage = ({ params }: Props) => {
  const { storeSlug } = params;

  return (
    <DashboardLayout storeSlug={storeSlug}>
      <h1 className="text-xl font-bold mb-4">Products for "{storeSlug}"</h1>
      <div className="rounded border p-4 bg-gray-50">
        <p>لیست محصولات این فروشگاه در آینده اینجا نمایش داده می‌شود.</p>
      </div>
    </DashboardLayout>
  );
};

export default ProductsPage;

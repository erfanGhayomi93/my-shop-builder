import React from 'react';
import { notFound } from 'next/navigation';
import DashboardLayout from '@/components/layouts/DashboardLayout';

interface Props {
  params: { storeSlug: string };
}

const DashboardPage = ({ params }: Props) => {
  const { storeSlug } = params;

  if (!storeSlug) {
    notFound(); // اگر slug نداشت، 404 بده
  }

  return (
    <DashboardLayout storeSlug={storeSlug}>
      <h1 className="text-xl font-bold">Welcome to {storeSlug}'s Dashboard1</h1>
    </DashboardLayout>
  );
};

export default DashboardPage;

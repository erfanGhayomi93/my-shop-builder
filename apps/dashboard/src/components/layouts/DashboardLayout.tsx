import React from 'react';

const DashboardLayout = ({
  storeSlug,
  children
}: {
  storeSlug: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Store: {storeSlug}</h2>
        <ul className="space-y-2">
          <li><a href={`/dashboard/${storeSlug}`}>Dashboard</a></li>
          <li><a href={`/dashboard/${storeSlug}/products`}>Products</a></li>
          <li><a href={`/dashboard/${storeSlug}/settings`}>Settings</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
};

export default DashboardLayout;

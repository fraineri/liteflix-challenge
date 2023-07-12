import Catalog from "@/components/Catalog";
import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-700">
      <Nav />
      {children}
      <Catalog />
    </div>
  );
}

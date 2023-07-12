import Catalog from "@/components/Catalog";
import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-green-400">
      <Nav />
      {children}
    </div>
  );
}

import Catalog from "@/components/Catalog";
import Nav from "@/components/Nav";

export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-dark-grey">
      <Nav />
      {children}
    </div>
  );
}

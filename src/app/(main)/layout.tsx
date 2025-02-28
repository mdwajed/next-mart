import Footer from "@/components/modules/shared/Footer";
import Navbar from "@/components/modules/shared/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;

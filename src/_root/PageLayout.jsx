import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = () => {
  return (
    <main className="bg-primary text-white w-full">
      <title>Paruk Azziyi | Home</title>

      <div className="w-desktop mx-auto">
        {/* Header */}
        <Header />

        {/* Content */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default PageLayout;

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { LanguageSelect } from "@/components/LanguageSelect/LanguageSelect";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div>
      <LanguageSelect />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

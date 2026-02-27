import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SakuraPetals from "./SakuraPetals";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col relative">
    <SakuraPetals />
    <Header />
    <main className="flex-1 pt-16 relative z-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;

import Footer from "@/pages/footer";
import HeaderPage from "@/pages/header";

const RootLayouts = ({ children }) => {
  return (
    <div>
      <HeaderPage />
      <div
        style={{
          height: "",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;

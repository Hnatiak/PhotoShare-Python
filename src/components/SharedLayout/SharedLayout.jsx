import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Container>
      <Header />
      <main>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </Container>
  );
};

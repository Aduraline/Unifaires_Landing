import { Modal } from "@redq/reuse-modal";
import { wrapper } from "../store";
import NProgress from "nprogress";
import Router from "next/router";

import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "../public/fonts/remixicon.css";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/nprogress.css";
import "../public/css/responsive.css";

import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";
import ThemeConfig from "theme";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const CustomApp = ({ Component, pageProps }) => {
  return (
    <ThemeConfig>
      <Modal>
        <Component {...pageProps} />
      </Modal>
    </ThemeConfig>
  );
};

export default wrapper.withRedux(CustomApp);

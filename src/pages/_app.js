import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "../public/fonts/remixicon.css";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import "antd/dist/antd.css";

import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}

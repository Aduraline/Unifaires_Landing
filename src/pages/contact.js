import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appCreative";
import { GlobalStyle, AppWrapper } from "components/globalApp.style";
import ResetCSS from "common/assets/css/style";
import { DrawerProvider } from "common/contexts/DrawerContext";
// Page Sections
import ContactSection from "components/ContactPage/ContactSection";

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Contact Page</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AppWrapper>
          {/* <h1>Contact</h1> */}
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>{/* <Navbar /> */}</DrawerProvider>
          </Sticky>
          <ContactSection />
          {/* <Footer /> */}
        </AppWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;

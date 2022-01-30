import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appCreative";
import { GlobalStyle, AppWrapper } from "components/globalApp.style";
import ResetCSS from "common/assets/css/style";
import { DrawerProvider } from "common/contexts/DrawerContext";
// Page Sections
import AuthWrapper from "components/AuthPages";
import ResetPasswordCard from "components/AuthPages/ResetPassword";

const ResetPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Reset Password</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>{/* <Navbar /> */}</DrawerProvider>
          </Sticky>
          <AuthWrapper content={<ResetPasswordCard />} />
          {/* <Footer /> */}
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default ResetPage;

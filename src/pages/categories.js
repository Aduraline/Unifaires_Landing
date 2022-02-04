import { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appCreative";
import ResetCSS from "common/assets/css/style";
import Fade from "react-reveal/Fade";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "components/Categories/CategoriesStyles";
// FIXME: Find a way to import this correctly
import CategoryDropDown from "components/Categories/CategoryDropDown/index.";
import Statistics from "components/Categories/Statistics";
import BreadCrumbs from "components/Categories/BreadCrumbs";
import Jobs from "components/Categories/Jobs";
import { DrawerProvider } from "common/contexts/DrawerContext";
import NavBar from "components/LandingPage/NavBar";
import Footer from "components/LandingPage/Footer";
import DegreeCourse from "components/Categories/DegreeCourse";
import Funding from "components/Categories/Funding";

export default function CategoriesPage() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>UNIFAIRES| Categories</title>
          <meta
            name="Description"
            content="Future-proof learning with career opportunities"
          />
          <meta name="theme-color" content="#6C247E" />
          <meta
            name="keywords"
            content="Future-proof learning with career opportunities"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans"
            rel="stylesheet"
          ></link>
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start category */}
        <AppWrapper>
          <DrawerProvider>
            <NavBar />
          </DrawerProvider>
          <ContentWrapper>
            <BreadCrumbs />
            <CategoryDropDown />
            <Fade left delay={100}>
              <Statistics />
            </Fade>
            <Jobs />
            <DegreeCourse />
            <Funding />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end */}
      </Fragment>
    </ThemeProvider>
  );
}

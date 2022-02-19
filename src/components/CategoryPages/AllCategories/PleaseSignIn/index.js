import { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appCreative";
import ResetCSS from "common/assets/css/style";
import Fade from "react-reveal/Fade";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "components/CategoryPages/CategoriesStyles";

import Statistics from "components/CategoryPages/AllCategories/Statistics";
import Jobs from "components/CategoryPages/AllCategories/Jobs";
import { DrawerProvider } from "common/contexts/DrawerContext";
import NavBar from "common/components/NavBar";
import Footer from "components/LandingPage/Footer";
import Funding from "components/CategoryPages/AllCategories/Funding";
import { subCategories } from "common/data/categoryData";
import CategoryDropDown from "components/CategoryPages/AllCategories/CategoryDropDown/index.";
import BreadCrumbs from "common/components/BreadCrumbs";
import DegreeCourse from "components/CategoryPages/AllCategories/DegreeCourse";
import SignInModal from "common/components/SignInModal";

export default function PleaseSignIn({ children }) {
  const me = false;
  if (!me)
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Head>
            <title>UNIFAIRES| All Categories</title>
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
          <SignInModal />
          <AppWrapper>
            <DrawerProvider>
              <NavBar />
            </DrawerProvider>
            <ContentWrapper>
              <BreadCrumbs
                childCategory={subCategories}
                parentCategory="Design"
              />
              <CategoryDropDown />
              <Statistics />
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
  return children;
}

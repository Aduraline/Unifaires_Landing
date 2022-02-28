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
import { DrawerProvider } from "common/contexts/DrawerContext";
import NavBar from "common/components/NavBar";
import Footer from "components/LandingPage/Footer";

import React from "react";
import { subCategoryCourse } from "common/data/categoryData";
import BreadCrumbs from "common/components/BreadCrumbs";
import PleaseSignIn from "components/CategoryPages/AllCategories/PleaseSignIn";
import SingleJobCategory from "components/CategoryPages/SingleJobCategory";

export default function SingleCoursePage() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>UNIFAIRES| Design Job</title>
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
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <DrawerProvider>
            <NavBar />
          </DrawerProvider>
          <ContentWrapper>
            <BreadCrumbs
              childCategory={subCategoryCourse}
              parentCategory="Design"
              subParentCategory="Web Design"
            />
            <SingleJobCategory />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
}

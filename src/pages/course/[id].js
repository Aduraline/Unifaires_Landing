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
import { DrawerProvider } from "common/contexts/DrawerContext";
import NavBar from "components/LandingPage/NavBar";
import Footer from "components/LandingPage/Footer";
import SingleCourse from "components/Categories/SingleCourse";
import React from "react";
import { subCategoryCourse } from "common/data/categoryData";
import BreadCrums from "components/Categories/BreadCrumbs";

export default function SingleCoursePage() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <DrawerProvider>
            <NavBar />
          </DrawerProvider>
          <ContentWrapper>
            <BreadCrums
              childCategory={subCategoryCourse}
              parentCategory="Design"
              subParentCategory="Web Design"
            />
            <SingleCourse />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
}

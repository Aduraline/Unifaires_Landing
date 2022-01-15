import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appCreative";
import ResetCSS from "common/assets/css/style";
import Navbar from "components/LandingPage/Navbar";
import Banner from "components/LandingPage/Banner";
import KeyFeatures from "components/LandingPage/KeyFeatures";
import CourseSection from "components/LandingPage/CourseSection";
import InDemandJob from "components/LandingPage/InDemandJob";
import ProSection from "components/LandingPage/ProSection";
import PopularTopics from "components/LandingPage/PopularTopics";
import DiverseSection from "components/LandingPage/DiverseSection";
import PopularInstructurs from "components/LandingPage/PopularInstructurs";
import TrustedBy from "components/LandingPage/TrustedBy";
import ExploreSection from "components/LandingPage/ExploreSection";
import Footer from "components/LandingPage/Footer";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "components/LandingPage/landingPageStyles";
import SalesSection from "components/LandingPage/SalesSection";

export default function AppCreative() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>
            UNIFAIRES| Future-proof learning with career opportunities
          </title>
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

        {/* start app creative landing */}
        <AppWrapper>
          <Navbar />
          <ContentWrapper>
            <Banner />
            <KeyFeatures />
            <CourseSection />
            <ExploreSection />
            <ProSection />
            <PopularTopics />
            <DiverseSection />
            <PopularInstructurs />
            <TrustedBy />
            <InDemandJob />
            <SalesSection />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app creative landing */}
      </Fragment>
    </ThemeProvider>
  );
}

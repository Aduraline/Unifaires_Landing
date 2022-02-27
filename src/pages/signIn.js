import { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appCreative";
import ResetCSS from "common/assets/css/style";
import GlobalStyle, {
  AppWrapper,
} from "components/AuthPages/SignInPage/SignIn.styles";
import SignIn from "components/AuthPages/SignInPage/SignIn";

export default function SignInPage() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>UNIFAIRES| SignIn</title>
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
        <AppWrapper>
          <SignIn />
        </AppWrapper>
        {/* end */}
      </Fragment>
    </ThemeProvider>
  );
}

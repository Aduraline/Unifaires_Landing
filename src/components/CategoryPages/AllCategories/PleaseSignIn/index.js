import DrawerUiSignUp from "common/components/DrawerMui";
import SignInModal from "common/components/SignInModal";
import CategoriesPage from "pages/categories";
import DegreeCourse from "../DegreeCourse";

export default function PleaseSignIn({ children }) {
  const me = false;
  if (!me)
    return (
      <>
        {/* <CategoriesPage /> */}
        {/* <SignInModal /> */}
        <DegreeCourse />
        <DrawerUiSignUp />
      </>
    );
  return children;
}

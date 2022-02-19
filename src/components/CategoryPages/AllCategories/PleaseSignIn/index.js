import SignInModal from "common/components/SignInModal";
import CategoriesPage from "pages/categories";

export default function PleaseSignIn({ children }) {
  const me = false;
  if (!me)
    return (
      <>
        <CategoriesPage />
        <SignInModal />
      </>
    );
  return children;
}

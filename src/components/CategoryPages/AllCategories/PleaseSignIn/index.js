import SignInModal from "common/components/SignInModal";

export default function PleaseSignIn({ children }) {
  const me = false;
  if (!me) return <SignInModal />;
  return children;
}

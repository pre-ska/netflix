import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  console.log("src", src);
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

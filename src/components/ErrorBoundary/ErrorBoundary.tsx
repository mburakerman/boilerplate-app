import { FormattedMessage } from "react-intl";
import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>
        <FormattedMessage defaultMessage="An error occured" id="uuDgUP" />
      </h1>
      {/* @ts-ignore */}
      <small>{error?.message}</small>
    </div>
  );
};

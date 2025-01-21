import { Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from "react-intl";

export const NotFound = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {formatMessage({
            defaultMessage: "Page not found",
            id: "QRccCM",
          })}
        </title>
      </Helmet>

      <h1>
        <FormattedMessage defaultMessage="Page not found" id="QRccCM" />
      </h1>
    </>
  );
};

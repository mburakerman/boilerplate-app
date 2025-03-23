import { Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from "react-intl";

export const NotFound = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
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

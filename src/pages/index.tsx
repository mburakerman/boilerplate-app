import { Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from "react-intl";

export const Index = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Helmet>
        <title>{formatMessage({ defaultMessage: "Home", id: "ejEGdx" })}</title>
      </Helmet>

      <h1>
        <FormattedMessage defaultMessage="Home" id="ejEGdx" />
      </h1>
    </>
  );
};

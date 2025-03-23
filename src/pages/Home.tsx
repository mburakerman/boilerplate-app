import { Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from "react-intl";

export const Home = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({ defaultMessage: "Home", id: "ejEGdx" })}
        </title>
      </Helmet>

      <h1>
        <FormattedMessage defaultMessage="Home" id="ejEGdx" />
      </h1>
    </>
  );
};

import { Helmet } from "react-helmet-async";
import { useGithubData } from "@/hooks/useGithubData";
import { FormattedMessage, useIntl } from "react-intl";

export const About = () => {
  const { formatMessage } = useIntl();

  const { data, isLoading } = useGithubData();

  if (isLoading) {
    return (
      <>
        <FormattedMessage defaultMessage="Loading..." id="gjBiyj" />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {formatMessage({ defaultMessage: "About", id: "g5pX+a" })}
        </title>
      </Helmet>

      <h1>
        <FormattedMessage defaultMessage="About" id="g5pX+a" />
      </h1>
      <p>
        <FormattedMessage defaultMessage="ID:" id="tmcdrp" /> {data?.id}
      </p>
    </>
  );
};

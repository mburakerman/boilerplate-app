import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="mb-8 flex gap-4 border-b">
      <Link to={"/"}>
        <FormattedMessage defaultMessage="Home" id="ejEGdx" />
      </Link>
      <Link to={"/about"}>
        <FormattedMessage defaultMessage="About" id="g5pX+a" />
      </Link>
      <Link to={"/login"}>
        <FormattedMessage defaultMessage="Login" id="AyGauy" />
      </Link>
    </div>
  );
};

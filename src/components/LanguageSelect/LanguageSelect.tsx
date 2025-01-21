import { FormattedMessage } from "react-intl";
import { Language, useSelectedLanguage } from "@/hooks/useSelectedLanguage";
import { cn } from "@/utils/cn";

export const LanguageSelect = ({ className }: { className?: string }) => {
  const [selectedLanguage, setSelectedLanguage] = useSelectedLanguage();

  return (
    <select
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value as Language)}
      className={cn("rounded border px-2 py-1", className)}
    >
      <option value="en">
        <FormattedMessage defaultMessage="English" id="WkrNSk" />
      </option>
      <option value="tr">
        <FormattedMessage defaultMessage="Turkish" id="PurNgG" />
      </option>
    </select>
  );
};

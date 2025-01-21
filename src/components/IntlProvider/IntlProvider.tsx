import React, { useEffect } from "react";
import {
  IntlProvider as OriginalIntlProvider,
  ReactIntlErrorCode,
} from "react-intl";
import turkish from "@/locales/tr.json";
import {
  Language,
  useSelectedLanguage,
  DEFAULT_LANGUAGE,
  LANGUAGE_LOCAL_STORAGE_KEY,
} from "@/hooks/useSelectedLanguage";
import { queryClient } from "@/utils/queryClient";

const translations: Record<Language, Record<string, string>> = {
  tr: turkish,
  en: {},
};

type Props = {
  readonly children: React.ReactNode;
};

export const IntlProvider = ({ children }: Props) => {
  const [selectedLanguage] = useSelectedLanguage();

  useEffect(() => {
    localStorage.setItem(
      LANGUAGE_LOCAL_STORAGE_KEY,
      selectedLanguage ?? DEFAULT_LANGUAGE,
    );
    queryClient.invalidateQueries();
  }, [selectedLanguage]);

  return (
    <OriginalIntlProvider
      locale={selectedLanguage ?? DEFAULT_LANGUAGE}
      messages={
        translations[selectedLanguage ?? DEFAULT_LANGUAGE] ??
        translations[DEFAULT_LANGUAGE]
      }
      onError={(error) => {
        if (
          error.code === ReactIntlErrorCode.MISSING_TRANSLATION &&
          (selectedLanguage ?? DEFAULT_LANGUAGE) === DEFAULT_LANGUAGE
        ) {
          return;
        }

        console.error(error);
      }}
    >
      <>{children}</>
    </OriginalIntlProvider>
  );
};

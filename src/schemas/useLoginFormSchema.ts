import { z } from "zod";
import { useIntl } from "react-intl";

export const useLoginFormSchema = () => {
  const intl = useIntl();

  return z.object({
    email: z
      .string({
        required_error: intl.formatMessage({
          defaultMessage: "Email is required",
          id: "cU/aSG",
        }),
      })
      .email({
        message: intl.formatMessage({
          defaultMessage: "Invalid email",
          id: "ByuOj8",
        }),
      }),
    password: z
      .string({
        required_error: intl.formatMessage({
          defaultMessage: "Password is required",
          id: "uiFoFm",
        }),
      })
      .min(6, {
        message: intl.formatMessage({
          defaultMessage: "Password must be at least 6 characters",
          id: "SJY9tx",
        }),
      }),
  });
};

export type LoginFormData = z.infer<ReturnType<typeof useLoginFormSchema>>;

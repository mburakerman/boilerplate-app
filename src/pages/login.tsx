import { FormattedMessage, useIntl } from "react-intl";
import { useLogin } from "@/hooks/useLogin";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import {
  useLoginFormSchema,
  LoginFormData,
} from "@/schemas/useLoginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginLayout } from "@/layouts/LoginLayout";

export const Login = () => {
  const { formatMessage } = useIntl();
  const { login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(useLoginFormSchema()),
  });

  const onSubmit = handleSubmit(async (data) => {
    await login({
      email: data.email,
      password: data.password,
    });
  });

  return (
    <LoginLayout>
      <Helmet>
        <title>
          {formatMessage({ defaultMessage: "Login", id: "AyGauy" })}
        </title>
      </Helmet>

      <h1 className="text-2xl font-bold">
        <FormattedMessage defaultMessage="Login" id="AyGauy" />
      </h1>

      <form onSubmit={onSubmit} className="mt-4 max-w-60 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block">
            <FormattedMessage defaultMessage="Email" id="sy+pv5" />
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full rounded border p-2"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block">
            <FormattedMessage defaultMessage="Password" id="5sg7KC" />
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full rounded border p-2"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password?.message}
            </p>
          )}
        </div>

        <button type="submit" className="w-full rounded bg-blue-500 px-4 py-2">
          <FormattedMessage defaultMessage="Login" id="AyGauy" />
        </button>
      </form>
    </LoginLayout>
  );
};

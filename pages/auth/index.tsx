import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { TextHelper, TranslationTypes } from "@project-boilerplate/shared/dist";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { CustomAlert } from "../../components/theme/CustomAlert";
import { CustomButton } from "../../components/theme/CustomButton";
import { Input } from "../../components/theme/form/Input";
import { SectionDivider } from "../../components/theme/SectionDivider";
import { theme } from "../../constants/theme";
import { TS } from "../../libs/TranslationHelper";
import { getGoogleOAuthUrl, userGoogleOAuthStoreToken } from "../../store/actions/oauth.actions";
import { showAlert } from "../../store/actions/ui.action";
import { userLogin } from "../../store/actions/user.action";
import { Auth__ } from "../../styles/pages/auth.styles";
import { IUserCredentials } from "../../types/user.types";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [credentials, setCredentials] = useState<IUserCredentials>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const accessToken = router.query.accessToken as string;
    const errorType = router.query.errorType as TranslationTypes;
    const errorMessage = router.query.errorMessage as string;
    console.log(router);

    if (errorMessage) {
      dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate(errorType, errorMessage)
        )
      );
    }

    if (accessToken) {
      dispatch(userGoogleOAuthStoreToken(String(accessToken)));
    }
  }, [router]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);

    // check if all fields are not empty (front-end validation)

    for (const [key, value] of Object.entries(credentials)) {
      if (!credentials[key]) {
        dispatch(
          showAlert(
            "Oops!",
            TS.translate("validation", "isNotEmpty", {
              field: TextHelper.capitalizeFirstLetter(key),
            })
          )
        );
        return;
      }
    }

    // if everything is ok, dispatch login action

    await dispatch(userLogin(credentials));
  };

  const onSignInWithGoogle = async () => {
    const googleUrl = await dispatch(getGoogleOAuthUrl());
    if (googleUrl) {
      window.location.href = String(googleUrl);
    }
  };

  return (
    <Auth__.Container>
      <Auth__.LoginBox>
        <Auth__.LoginTopContainer>
          <h2>{TS.translate("auth", "login")}</h2>
        </Auth__.LoginTopContainer>

        <CustomAlert />

        <div>
          <Form onSubmit={onSubmit}>
            <Input
              id="login-email"
              type="email"
              label={TS.translate("form", "email")}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              placeholder="john@gmail.com"
            />

            <Input
              id="loginpassword"
              type="password"
              label={TS.translate("form", "password")}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />

            <Auth__.BottomOptionsContainer>
              <Link href="/auth/register">
                <small>{TS.translate("auth", "createYourAccount")}</small>
              </Link>
              <Link href="/auth/forgot-password">
                <small>{TS.translate("auth", "forgotPassword")}</small>
              </Link>
            </Auth__.BottomOptionsContainer>

            <CustomButton type="submit" variant="primary" block>
              {TS.translate("auth", "login")}
            </CustomButton>

            <SectionDivider>{TS.translate("form", "or")}</SectionDivider>

            <CustomButton
              onClick={onSignInWithGoogle}
              variant="primary"
              backgroundColor={theme.colors.google}
              textColor="white"
              icon={faGoogle}
              iconSlot="start"
              block
            >
              {TS.translate("auth", "signInWithGoogle")}
            </CustomButton>
          </Form>
        </div>
      </Auth__.LoginBox>
    </Auth__.Container>
  );
}

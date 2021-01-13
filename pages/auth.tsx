import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { TextHelper } from "@project-boilerplate/shared/dist";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { CustomAlert } from "../components/theme/CustomAlert";
import { CustomButton } from "../components/theme/CustomButton";
import { Input } from "../components/theme/form/Input";
import { SectionDivider } from "../components/theme/SectionDivider";
import { theme } from "../constants/theme";
import { TS } from "../libs/TranslationHelper";
import { getGoogleOAuthUrl, userGoogleOAuthStoreToken } from "../store/actions/oauth.actions";
import { showAlert } from "../store/actions/ui.action";
import { userLogin } from "../store/actions/user.action";
import { Login__ } from "../styles/pages/login.styles";
import { IUserCredentials } from "../types/user.types";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [credentials, setCredentials] = useState<IUserCredentials>({
    email: "",
    password: "",
  });

  useEffect(() => {
    // check if an accessToken parameter was passed to our url
    const accessToken = router.query.accessToken as string;

    console.log("found access token on route");

    if (accessToken) {
      dispatch(userGoogleOAuthStoreToken(accessToken));
      router.push("/main");
    }
  }, []);

  const onSubmit = async () => {
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
      console.log(googleUrl);
      window.location.href = String(googleUrl);
    }
  };

  return (
    <Login__.Container>
      <Login__.LoginBox>
        <Login__.LoginTopContainer>
          <h2>{TS.translate("auth", "login")}</h2>
        </Login__.LoginTopContainer>

        <CustomAlert />

        <div>
          <Form>
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

            <Login__.BottomOptionsContainer>
              <Link href="/register">
                <small>{TS.translate("auth", "createYourAccount")}</small>
              </Link>
              <Link href="/forgot-password">
                <small>{TS.translate("auth", "forgotPassword")}</small>
              </Link>
            </Login__.BottomOptionsContainer>

            <CustomButton onClick={onSubmit} variant="primary" block>
              {TS.translate("auth", "login")}
            </CustomButton>

            <SectionDivider>OR</SectionDivider>

            <CustomButton
              onClick={onSignInWithGoogle}
              variant="primary"
              backgroundColor={theme.colors.google}
              textColor="white"
              icon={faGoogle}
              iconSlot="start"
              block
            >
              Sign in with Google
            </CustomButton>
          </Form>
        </div>
      </Login__.LoginBox>
    </Login__.Container>
  );
}

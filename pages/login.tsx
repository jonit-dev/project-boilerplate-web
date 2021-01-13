import { TextHelper } from "@project-boilerplate/shared/dist";
import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { CustomAlert } from "../components/theme/CustomAlert";
import { CustomButton } from "../components/theme/CustomButton";
import { Input } from "../components/theme/form/Input";
import { SectionDivider } from "../components/theme/SectionDivider";
import { TS } from "../libs/TranslationHelper";
import { showAlert } from "../store/actions/ui.action";
import { userLogin } from "../store/actions/user.action";
import { Login__ } from "../styles/pages/login.styles";
import { IUserCredentials } from "../types/user.types";

export default function LoginScreen() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState<IUserCredentials>({
    email: "",
    password: "",
  });

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
          </Form>
        </div>
      </Login__.LoginBox>
    </Login__.Container>
  );
}

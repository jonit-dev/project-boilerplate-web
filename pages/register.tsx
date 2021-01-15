import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { CustomAlert } from "../components/theme/CustomAlert";
import { CustomButton } from "../components/theme/CustomButton";
import { Input } from "../components/theme/form/Input";
import { SectionDivider } from "../components/theme/SectionDivider";
import { theme } from "../constants/theme";
import { TS } from "../libs/TranslationHelper";
import { ValidationHelper } from "../libs/ValidationHelper";
import { getGoogleOAuthUrl } from "../store/actions/oauth.actions";
import { showAlert } from "../store/actions/ui.action";
import { Auth__ } from "../styles/pages/auth.styles";
import { INewUser } from "../types/user.types";

export default function RegisterScreen() {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState<INewUser>({
    name: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    address: "",
    phone: "",
  });

  const onSubmit = () => {
    console.log(newUser);

    if (newUser.password !== newUser.passwordConfirmation) {
      dispatch(
        showAlert(
          "Oops!",
          "Sorry! The chosen password does not match with its confirmation. Please, try again."
        )
      );
    }

    const invalidFields = ValidationHelper.validateKeyValue(newUser, {
      optionalFields: ["address", "phone"],
      fieldLabels: {
        name: TS.translate("form", "name"),
        email: TS.translate("form", "email"),
        password: TS.translate("form", "password"),
        address: TS.translate("form", "address"),
        phone: TS.translate("form", "phone"),
      },
    });
    if (invalidFields) {
      dispatch(
        showAlert(
          "Oops!",
          TS.translate("form", "emptyFieldsError", {
            invalidFields: invalidFields,
          })
        )
      );
      return;
    }
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
          <h2>{TS.translate("auth", "register")}</h2>
        </Auth__.LoginTopContainer>

        <CustomAlert />

        <div>
          <Form>
            <Input
              id="register-name"
              type="text"
              label={TS.translate("form", "name")}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder="Your name"
            />

            <Input
              id="register-email"
              type="email"
              label={TS.translate("form", "email")}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <Input
              id="register-password"
              type="password"
              label={TS.translate("form", "password")}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
            <Input
              id="register-password-confirmation"
              type="password"
              label={TS.translate("form", "passwordConfirmation")}
              onChange={(e) =>
                setNewUser({ ...newUser, passwordConfirmation: e.target.value })
              }
            />
            <Input
              id="register-address"
              type="address"
              label={TS.translate("form", "address")}
              onChange={(e) =>
                setNewUser({ ...newUser, address: e.target.value })
              }
            />
            <Input
              id="register-phone"
              type="phone"
              label={TS.translate("form", "phone")}
              onChange={(e) =>
                setNewUser({ ...newUser, phone: e.target.value })
              }
            />

            <Auth__.BottomOptionsContainer>
              <Link href="/auth">
                <small>{TS.translate("auth", "alreadyHaveAccountLogin")}</small>
              </Link>
            </Auth__.BottomOptionsContainer>

            <CustomButton onClick={onSubmit} variant="primary" block>
              {TS.translate("auth", "register")}
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

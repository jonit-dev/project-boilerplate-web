import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { CustomAlert } from "../../components/theme/CustomAlert";
import { CustomButton } from "../../components/theme/CustomButton";
import { Input } from "../../components/theme/form/Input";
import { TS } from "../../libs/TranslationHelper";
import { showAlert } from "../../store/actions/ui.action";
import { userForgotPassword } from "../../store/actions/user.action";
import { StoreState } from "../../store/reducers/index.reducer";
import { IUIReducer } from "../../store/reducers/ui.reducer";
import { Auth__ } from "../../styles/pages/auth.styles";

export default function ForgotPasswordScreen(props) {
  const [recoveryEmail, setRecoveryEmail] = useState<string>("");

  const { uiAlert } = useSelector<StoreState, IUIReducer>(
    (state) => state.uiReducer
  );

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!recoveryEmail) {
      dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("validation", "isNotEmpty")
        )
      );
      return;
    }

    dispatch(userForgotPassword(recoveryEmail));
  };

  return (
    <Auth__.Container>
      <Auth__.LoginBox>
        <Auth__.LoginTopContainer>
          <h2>{TS.translate("auth", "forgotYourPassword")}</h2>
        </Auth__.LoginTopContainer>

        {uiAlert ? (
          <CustomAlert />
        ) : (
          <Alert variant="info">
            <FontAwesomeIcon icon={faInfoCircle} />
            {"   "}
            {TS.translate("auth", "forgotPasswordText")}
          </Alert>
        )}

        <div>
          <Form onSubmit={onSubmit}>
            <Input
              id="forgot-password-email"
              type="email"
              label={TS.translate("form", "email")}
              onChange={(e) => setRecoveryEmail(e.target.value)}
              placeholder={TS.translate(
                "form",
                "forgotPasswordEmailPlaceholder"
              )}
            />

            <CustomButton type="submit" variant="primary" block>
              {TS.translate("form", "submit")}
            </CustomButton>
          </Form>
        </div>
      </Auth__.LoginBox>
    </Auth__.Container>
  );
}

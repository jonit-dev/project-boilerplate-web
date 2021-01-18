import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { withAuth } from "../../components/HOC/withAuth";
import { CustomAlert } from "../../components/theme/CustomAlert";
import { CustomButton } from "../../components/theme/CustomButton";
import { Input } from "../../components/theme/form/Input";
import { TS } from "../../libs/TranslationHelper";
import { ValidationHelper } from "../../libs/ValidationHelper";
import { showAlert } from "../../store/actions/ui.action";
import { userChangePassword } from "../../store/actions/user.action";
import { StoreState } from "../../store/reducers/index.reducer";
import { IUIReducer } from "../../store/reducers/ui.reducer";
import { Auth__ } from "../../styles/pages/auth.styles";
import { IChangePasswords } from "../../types/user.types";

function ChangePasswordScreen(props) {
  const [passwords, setPasswords] = useState<IChangePasswords>({
    currentPassword: "",
    newPassword: "",
  });

  const { uiAlert } = useSelector<StoreState, IUIReducer>(
    (state) => state.uiReducer
  );

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const invalidFields = ValidationHelper.validateKeyValue(passwords, {
      fieldLabels: {
        currentPassword: "Current Password",
        newPassword: "New Password",
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

    console.log("changing passwords...");
    dispatch(
      userChangePassword({
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword,
      })
    );
  };

  return (
    <Auth__.Container>
      <Auth__.LoginBox>
        <Auth__.LoginTopContainer>
          <h2>{TS.translate("auth", "changePassword")}</h2>
        </Auth__.LoginTopContainer>

        {uiAlert ? (
          <CustomAlert />
        ) : (
          <Alert variant="info">
            <FontAwesomeIcon icon={faInfoCircle} />
            {"   "}
            {TS.translate("auth", "changePasswordInfoText")}
          </Alert>
        )}

        <div>
          <Form onSubmit={onSubmit}>
            <Input
              id="change-password-old"
              type="password"
              label={TS.translate("form", "currentPassword")}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  currentPassword: e.target.value,
                })
              }
              placeholder={TS.translate("form", "currentPasswordPlaceholder")}
            />
            <Input
              id="change-password-new"
              type="password"
              label={TS.translate("form", "newPassword")}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  newPassword: e.target.value,
                })
              }
              placeholder={TS.translate("form", "newPasswordPlaceholder")}
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

export default withAuth(ChangePasswordScreen);

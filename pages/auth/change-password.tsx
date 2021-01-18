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

  const onSubmit = () => {
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
  };

  return (
    <Auth__.Container>
      <Auth__.LoginBox>
        <Auth__.LoginTopContainer>
          <h2>Change your Password</h2>
        </Auth__.LoginTopContainer>

        {uiAlert ? (
          <CustomAlert />
        ) : (
          <Alert variant="info">
            <FontAwesomeIcon icon={faInfoCircle} />
            {"   "}
            Please, type your current password and your chosen new password on
            the fields below.
          </Alert>
        )}

        <div>
          <Form>
            <Input
              id="change-password-old"
              type="password"
              label={"Current Password"}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  currentPassword: e.target.value,
                })
              }
              placeholder="Your current password..."
            />
            <Input
              id="change-password-new"
              type="password"
              label={"New Password"}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  newPassword: e.target.value,
                })
              }
              placeholder="Your new password..."
            />

            <CustomButton onClick={onSubmit} variant="primary" block>
              {TS.translate("form", "submit")}
            </CustomButton>
          </Form>
        </div>
      </Auth__.LoginBox>
    </Auth__.Container>
  );
}

export default withAuth(ChangePasswordScreen);

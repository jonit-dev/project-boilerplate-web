import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CustomAlert } from "../components/theme/CustomAlert";
import { CustomButton } from "../components/theme/CustomButton";
import { Input } from "../components/theme/form/Input";
import { showAlert } from "../store/actions/ui.action";
import { userLogin } from "../store/actions/user.action";
import { Login__ } from "../styles/pages/login.styles";
import { IUserCredentials } from "../types/user.types";

export default function LoginPage() {
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
          showAlert("Oops!", `The field "${key}" cannot be empty!`, "danger")
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
        <div className="login-top-container">
          <h2>Login</h2>
        </div>

        <CustomAlert />

        <div className="login-box-body">
          <form>
            <Input
              id="login-email"
              type="email"
              label="Email"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              placeholder="john@gmail.com"
            />

            <Input
              id="loginpassword"
              type="password"
              label="Password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />

            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div> */}
            <CustomButton variant="primary" onClick={onSubmit}>
              Login
            </CustomButton>
          </form>
        </div>
      </Login__.LoginBox>
    </Login__.Container>
  );
}

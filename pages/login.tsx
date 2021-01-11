import { useState } from "react";

import { Button } from "../components/theme/Button";
import { Input } from "../components/theme/form/Input";
import { Logo } from "../components/theme/Logo";
import { Login__ } from "../styles/pages/login.styles";
import { IUserCredentials } from "../types/user.types";

export default function LoginPage() {
  const [credentials, setCredentials] = useState<IUserCredentials>({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log(credentials);
  };

  return (
    <Login__.Container>
      <Login__.LoginBox>
        <div className="logo-container">
          <Logo />
        </div>

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
            <Button variant="primary" text="Login" onClick={onSubmit} />
          </form>
        </div>
      </Login__.LoginBox>
    </Login__.Container>
  );
}

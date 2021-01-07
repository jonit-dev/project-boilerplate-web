import { useDispatch, useSelector } from "react-redux";

import { userLogin } from "../store/actions/user.action";
import { StoreState } from "../store/reducers/index.reducer";
import { IUserReducer } from "../store/reducers/user.reducer";
import { HomeStyled } from "../styles/home.styles";

export default function Home() {
  const dispatch = useDispatch();

  const { user } = useSelector<StoreState, IUserReducer>(
    (state) => state.userReducer
  );

  const onClickCheckRedux = () => {
    dispatch(userLogin({ email: "test", password: "123" }));
  };

  return (
    <HomeStyled.Container>
      <HomeStyled.H1>NextJS Boilerplate</HomeStyled.H1>

      <h1>User (Redux test)</h1>

      {user && JSON.stringify(user)}

      <p>
        Click the button below to load all user info, making sure that Redux is
        working properly!
      </p>

      <button onClick={onClickCheckRedux}>Check redux</button>
    </HomeStyled.Container>
  );
}

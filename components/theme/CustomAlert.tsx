import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { clearAlert } from "../../store/actions/ui.action";
import { StoreState } from "../../store/reducers/index.reducer";
import { IUIReducer } from "../../store/reducers/ui.reducer";

export const CustomAlert: React.FC = (props) => {
  const { uiAlert } = useSelector<StoreState, IUIReducer>(
    (state) => state.uiReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (uiAlert) {
      window.scrollTo(0, 0); // scroll to top when alert appears!

      setTimeout(() => {
        dispatch(clearAlert());
      }, 10000);
    }
  }, [uiAlert]);

  return (
    uiAlert && (
      <Alert
        variant={uiAlert.variant}
        onClose={() => dispatch(clearAlert())}
        dismissible
      >
        <Alert.Heading>{uiAlert.title}</Alert.Heading>
        {uiAlert.message}
      </Alert>
    )
  );
};

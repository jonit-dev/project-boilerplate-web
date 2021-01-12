import { AlertActionTypes, IDispatchAlertClear, IDispatchAlertShow, UIAlertTypes } from "../../types/ui.types";

export const showAlert = (
  key: string,
  variant: string,
  type: UIAlertTypes,
  title: string,
  message: string
): IDispatchAlertShow => {
  return {
    type: AlertActionTypes.Show,
    payload: {
      key,
      variant,
      type,
      title,
      message,
    },
  };
};

export const clearAlert = (): IDispatchAlertClear => {
  console.log("clearing alert info on route change...");
  return {
    type: AlertActionTypes.Clear,
  };
};

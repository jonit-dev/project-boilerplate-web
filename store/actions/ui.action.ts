import { AlertActionTypes, IDispatchAlertClear, IDispatchAlertShow } from "../../types/ui.types";

export const showAlert = (
  title: string,
  message: string,
  variant = "danger"
): IDispatchAlertShow => {
  console.log("Showing alert...");
  return {
    type: AlertActionTypes.Show,
    payload: {
      title,
      message,
      variant,
    },
  };
};

export const clearAlert = (): IDispatchAlertClear => {
  console.log("Clearing alert data");
  return {
    type: AlertActionTypes.Clear,
  };
};

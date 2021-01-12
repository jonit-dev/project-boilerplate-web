export interface IAlert {
  key: string;
  variant: string; //primary, secondary, etc... It should match our bootstrap theme
  type: UIAlertTypes; // we have the standard 'message' alert and also the modal alert.
  title: string;
  message: string;
}

export enum UIAlertTypes {
  message,
  modal,
}

export enum AlertActionTypes {
  Show = "Show",
  Clear = "Clear",
}

export interface IDispatchAlertShow {
  type: AlertActionTypes.Show;
  payload: IAlert;
}

export interface IDispatchAlertClear {
  type: AlertActionTypes.Clear;
}

export type AlertAction = IDispatchAlertShow | IDispatchAlertClear;

import history from '../pages/routing/history';

export class RoutingHelper {
  public static redirect(route: string) {
    history.push(route);
  }
}

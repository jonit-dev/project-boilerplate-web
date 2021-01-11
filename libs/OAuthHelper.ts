import { HttpStatus, IGoogleOAuthUrlResponse } from "@project-boilerplate/shared";

import { APIHelper } from "./APIHelper";

export class OAuthHelper {
  public static async getGoogleOAuthUrl(): Promise<string | false> {
    try {
      const response = await APIHelper.apiRequest(
        "GET",
        "/auth/google/url",
        null,
        false
      );

      if (response.status === HttpStatus.OK) {
        const { googleOAuthUrl } = response.data as IGoogleOAuthUrlResponse;

        return googleOAuthUrl;
      }
    } catch (error) {
      console.error(error);
      //! Display error message
      return false;
    }

    return false;
  }
}

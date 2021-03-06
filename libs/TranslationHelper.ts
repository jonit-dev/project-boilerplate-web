import { TranslationTypes } from "@project-boilerplate/shared";

import { appEnv } from "../constants/appEnv";

interface IInterpolationObjs {
  [key: string]: string;
}

export class TS {
  public static translate(
    context: TranslationTypes,
    key: string,
    interpolationObjs?: IInterpolationObjs
  ) {
    const envLang = appEnv.general.language!;

    const jsonFile = require(`../node_modules/@project-boilerplate/shared/src/translations/${context}.lang.json`);

    let translatedString: string;

    try {
      translatedString = jsonFile[key][envLang];
    } catch (error) {
      translatedString = `TRANSLATION_KEY_ERROR: ${context}_${key}`;
    }

    if (interpolationObjs) {
      for (const key of Object.keys(interpolationObjs)) {
        translatedString = translatedString.replace(
          `{{${key}}}`,
          interpolationObjs[key]
        );
      }
    }

    return translatedString;
  }
}

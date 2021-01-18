import _ from "lodash";

export interface IValidateKeyValueConfig {
  optionalFields?: string[];
  fieldLabels: object;
}

export class ValidationHelper {
  public static validateKeyValue(
    targetObject: Object,
    config: IValidateKeyValueConfig
  ): string {
    let invalidFields = "";

    for (const key of Object.keys(targetObject)) {
      // loop through all key value pairs, except the optional ones
      if (!config.optionalFields?.includes(key)) {
        if (
          !targetObject[key] ||
          targetObject[key] === "default" ||
          !targetObject[key].length
        ) {
          const fieldLabel = config.fieldLabels[key];
          invalidFields += `${_.capitalize(fieldLabel)}, `;
        }
      }
    }
    return invalidFields.slice(0, invalidFields.length - 2);
  }
}

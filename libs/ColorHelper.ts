export class ColorHelper {
  public static hexToRgb(hex: string) {
    // http://stackoverflow.com/a/5624139
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  public static hexToRgba(hex: string, alpha: number): string {
    const color = ColorHelper.hexToRgb(hex);
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  }
}

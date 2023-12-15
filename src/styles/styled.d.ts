// theme.ts에서 사용할 변수들의 타입 지정
import "styled-components";

declare module "styled-component" {
  export interface DefaultTheme {
    colors: {
      darkHigh: string;
      darkMedium: string;
      darkLow: string;
      lightHigh: string;
      lightMedium: string;
      lightLow: string;
    };
  }
}

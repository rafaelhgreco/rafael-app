// styled.d.ts
import "styled-components";
import { Theme } from "./styles/themes"; // Ajuste o caminho se necessário

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}

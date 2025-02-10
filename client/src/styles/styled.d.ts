import { TTheme } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme extends TTheme {}
}

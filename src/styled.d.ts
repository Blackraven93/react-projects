import 'styled-components';


declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        accentColor : string;
        fontWeightBold : string;
        chartUpColor : string;
        chartCloseColor : string;
        coinCardColor: string;
    }
}
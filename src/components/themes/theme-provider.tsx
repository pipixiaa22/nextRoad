import { ThemeProvider as BaseThemeProvider } from "next-themes";

type ThemeProviderProp = {
    children : React.ReactNode
}
const ThemeProvider = ({children}:ThemeProviderProp) => {

    return <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </BaseThemeProvider>
}

export {ThemeProvider}
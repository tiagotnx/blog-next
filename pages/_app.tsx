import { AppProps } from "next/app";
import "../styles/index.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../styles/prism-overrides.css";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute='class'>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

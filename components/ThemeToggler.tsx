import { useTheme } from "next-themes";

export default function ThemeToggler() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            type='button'
            aria-label='Toggle dark mode'
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
        >
            Modo escuro
        </button>
    );
}

import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import ThemeToggler from "./ThemeToggler";

const Footer = () => {
    return (
        <footer className='bg-neutral-900 border-t border-neutral-950'>
            <Container>
                <div className='py-28 flex flex-col lg:flex-row items-center'>
                    <h3 className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
                        Gerado estaticamente usando Next.js.
                    </h3>
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
                        <a
                            href='https://nextjs.org/docs/basic-features/pages'
                            className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'
                        >
                            Ler documentação
                        </a>
                        <a
                            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                            className='mx-3 font-bold hover:underline'
                        >
                            Ver no GitHub
                        </a>
                    </div>
                </div>
            </Container>
            <ThemeToggler />
        </footer>
    );
};

export default Footer;

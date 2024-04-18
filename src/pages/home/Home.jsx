export const Home = () => {
    return (
        <>
            <header className="absolute bg-[#f3f2f0] h-16 w-screen grid place-content-center border-black border-b-2">
                <nav className="w-screen px-12 flex items-center justify-between">
                    <div className="flex items-center gap-2 justify-center w-full 
                    md:justify-start md:w-auto">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-6 h-6"
                        >
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" 
                            />
                        </svg>
                        <h1 className="text-xl font-semibold">
                            Password manager
                        </h1>
                    </div> 
                    <ul className="gap-8 text-xl font-semibold hidden md:flex">
                        <li><a href="">Login</a></li>
                        <li><a href="">SignUp</a></li>
                    </ul>
                </nav>
            </header>
            <main className="flex h-screen w-full bg-[#f3f2f0] flex-col justify-center 
            xl:justify-start xl:flex-row">
                <section className="flex flex-col justify-center gap-16 px-12 
                w-full mt-12 items-center xl:items-start xl:mt-0 xl:w-1/2 xl:px-32">
                    <article className="text-center xl:text-left">
                        <h1 className="text-5xl font-bold xl:text-6xl xl:leading-tight">
                            Acceso más sencillo, <br />
                            contraseñas más seguras
                        </h1>
                        <p className="mt-8 text-lg">
                            Usar un gestor de contraseñas ofrece 
                            seguridad al almacenarlas encriptadas, 
                            genera contraseñas fuertes y únicas, 
                            simplifica el acceso con autocompletado, 
                            y permite sincronización entre dispositivos, 
                            facilitando la gestión y actualización.
                        </p>
                    </article>
                    <article>
                        <a 
                        href="" 
                        className="bg-black text-white px-8 py-4 rounded-md
                        hover:bg-transparent hover:text-black border-black hover:border-2 
                        transition-colors"
                        >
                            Empieza ahora
                        </a>
                    </article>
                </section>
                <section className="w-1/2 justify-center items-center hidden xl:flex">
                    <article className="h-[700px] w-[600px]">
                        <img className="hover:scale-105 transition-transform" src="./hero.png" alt="hero" />
                    </article>
                </section>
            </main>
        </>
    )
}
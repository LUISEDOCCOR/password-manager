export const Home = () => {
    return (
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
    )
}
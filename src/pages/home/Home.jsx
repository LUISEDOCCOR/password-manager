export const Home = () => {
    return (
        <main className="flex h-screen w-full bg-[#f3f2f0]">
            <section className="flex flex-col justify-center w-1/2 gap-16 px-12 xl:px-32">
                <article>
                    <h1 className="text-6xl leading-tight font-bold">
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
            <section className="w-1/2 flex justify-center items-center">
                <article className="h-[700px] w-[600px]">
                    <img className="hover:scale-105 transition-transform" src="./hero.png" alt="hero" />
                </article>
            </section>
        </main>
    )
}
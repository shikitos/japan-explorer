export const Welcome = () => {
    return (
        <section className="w-full">
            <figure className="flex flex-col gap-[48px] ">
                <figcaption className="flex flex-col gap-1.5 pl-11 pr-11">
                    <h1 className="w-fit max-w-full font-inter text-6xl uppercase leading-snug tracking-widest  text-zinc-800 md:text-9xl lg:text-8xl xl:text-10xl">
                        Japan Adventure
                    </h1>
                    <p className="text-mid max-w-8xl font-inter text-zinc-800">
                        Discover the country&apos;s hidden gems and create unforgettable memories that will last a lifetime. Immerse yourself in
                        Japanese culture and atmosphere, and fall in love with Japan forever.
                    </p>
                </figcaption>
                <img
                    src="backgrounds/fuji-background.webp"
                    alt="Background image of Mount Fuji"
                    className="max-[620]: h-full w-full object-cover object-center"
                />
            </figure>
        </section>
    );
};

function About() {
  return (
    <section className="w-full bg-rose-200 py-10 md:py-16 px-4">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/src/elements/aboutbg.jpg"
            alt="cake"
            className="w-full h-[280px] sm:h-[380px] md:h-[520px] lg:h-[680px] xl:h-[780px] object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
              WELCOME!
            </h1>

            <p className="max-w-xl text-[10px] sm:text-sm md:text-base leading-relaxed font-light drop-shadow-lg">
              Your paragraph text should paint a vivid picture in the minds of
              your readers...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

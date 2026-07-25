import hero from "../assets/hero.jpg";
import odznaka from "../assets/odznaka.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-10 bg-background"
    >
      <div className="flex w-full flex-col max-w-5xl">
        <div className="w-full flex flex flex-col md:flex-row gap-7">
          <div className="flex-1">
            <img src={hero} className="rounded-xs"></img>
          </div>

          <div className="flex-1">
            <p className="text-sm text-primary-light">ABOUT</p>
            <h3 className="text-3xl my-2">
              A local who reads the city and the mountains like an old book.
            </h3>

            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="my-2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <hr className="my-5 mx-10 border-0 h-px bg-primary-light" />

            <div className="text-center">
              <p className="mb-2">Języki</p>
              <p className="text-sm">polski</p>
              <p className="text-sm">czeski</p>
            </div>

            <hr className="my-5 mx-10 border-0 h-px bg-primary-light" />

            <h3>Uprawnienia</h3>
            <div className="flex flex-row gap-4">
              <article className="m-0 p-0 border bg-card border-border shadow-card rounded-xs">
                <div className="p-3 flex flex-col items-center text-center">
                  <img
                    src={odznaka}
                    className="w-24 h-auto object-contain"
                  ></img>
                  <p className="text-sm">
                    Uprawnienia przewodnika górskiego na obszar Sudetów klasy
                    III. Numer uprawnień 36/LG/2019, wydane przez Marszałka
                    Województwa Dolnośląskiego.
                  </p>
                </div>
              </article>

              <article className="m-0 p-0 border bg-card border-border shadow-card rounded-xs">
                <div className="p-3 flex flex-col items-center text-center">
                  <img
                    src={odznaka}
                    className="w-24 h-auto object-contain"
                  ></img>
                  <p className="text-sm">
                    Uprawnienia przewodnika górskiego na obszar Sudetów klasy
                    III. Numer uprawnień 36/LG/2019, wydane przez Marszałka
                    Województwa Dolnośląskiego.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

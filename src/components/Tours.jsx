import prague from "../assets/prague.jpg";
import sudety from "../assets/sudety.jpg";

export default function Tours() {
  return (
    <section
      id="tours"
      className="min-h-screen flex items-center justify-center px-6 pt-10 bg-foreground"
    >
      <div className="flex w-full max-w-5xl">
        <div className="w-full flex flex-col justify-left">
          <div class="text-center">
            <p>Tours</p>
            <h3>Wybierz region, który chcesz zobaczyć.</h3>
          </div>

          <div className="w-full flex flex-row justify-between gap-7">
            <article className="m-0 p-0 border bg-card border-border shadow-card rounded-xs flex-1">
              <img
                src={sudety}
                className="w-full aspect-[4/3] object-cover"
                alt="sudety"
              ></img>
              <div className="p-5">
                <p>Sudety</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </article>

            <article className="m-0 p-0 border flex-1">
              <img
                src={prague}
                className="w-full aspect-[4/3] object-cover"
                alt="praga"
              ></img>
              <div>
                <p>Praga</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

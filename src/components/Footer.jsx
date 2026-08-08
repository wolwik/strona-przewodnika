import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmited, setIsSubmited] = useState(false);

  const onSubmit = (data) => {
    if (data) setIsSubmited(true);
    console.log(data); // w momencie kliknięcia submit w react-form wszystkie dane są zapisywane jako obiekt i poprzez handleSubmit (niżej, w <form>) są przekazywane tutaj. ta konkretna funkcja wyswietla je w konsoli (sprawdzalam, czy formularz dziala). Data to to, co zostało przekazane do onSubmit przez handleSubmit.
  };
  return (
    <>
      <section
        id="footer"
        className="min-h-screen flex items-center justify-center px-6 pt-10 bg-background"
      >
        <div
          className={`absolute w-full h-full bg-black/60 flex justify-center items-center transition-all duration-300 ease-in-out ${
            isSubmited
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative bg-white flex flex-col border border-solid rounded-3xl shadow-[7px_7px_4px_0px_rgba(66,68,90,0.24)] p-7"
          >
            <button
              type="button"
              aria-label="Zamknij okno dialogowe"
              className="absolute top-3 right-3 text-xl leading-none"
              onClick={() => setIsSubmited(false)}
            >
              x
            </button>
            <h3 className="font-alkalami text-2xl pt-2">Dziękuję,</h3>
            <p className="text-base py-2 pr-3">
              Otrzymałam twoją wiadomość, odezwę się wkrótce!
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-5xl">
          <div className="w-full flex flex-col md:flex-row gap-7">
            <div className="w-full flex flex-col justify-left">
              <h2>Zaplanujmy wycieczkę!</h2>

              <p>
                Masz jakieś pytania? Zapraszam do kontaktu mailowo lub
                telefonicznie.
              </p>
            </div>

            <div class="bg-foreground">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                  <label htmlFor="first-name">Imię</label>
                  <input
                    id="first-name"
                    type="text"
                    {...register("firstName", {
                      required: true,
                      message: "Wpisz swoje imię.",
                    })}
                    className={`border ${errors.firstName ? "border-red-500" : "border-solid"}`}
                  ></input>
                </fieldset>

                {errors.firstName && <span>Wpisz swoje imię.</span>}

                <fieldset>
                  <label htmlFor="email">Adres email</label>
                  <input
                    id="email"
                    type="text"
                    {...register("email", {
                      required: true,
                      message: "Podaj adres email.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Podaj poprawny adres email",
                      },
                    })}
                    className={`border ${errors.email ? "border-red-500" : "border-solid"}`}
                  ></input>
                </fieldset>

                {errors.email && <span>Podaj poprawny adres email.</span>}

                <fieldset className="flex flex-col w-full">
                  <label htmlFor="message" className="py-2 pl-4">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    type="text"
                    {...register("message", { required: true })}
                    className="bg-gray-300 rounded-3xl py-2 px-3 w-full"
                  ></textarea>
                </fieldset>

                <div className="flex w-full justify-center gap-7 mt-6">
                  <button type="submit">Wyślij</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="m-0 p-0 bg-foreground">
          <p>
            <a href="https://emiliasabo.pl/">Emilia Sabo</a> © 2026 | build with
            passion and strong black coffee
          </p>
        </div>
      </section>
    </>
  );
}

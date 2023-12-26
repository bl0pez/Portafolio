import { Animation } from "@/components/animation/Animation";

const Contact = () => {
  return (
    <section id="contact" className="">
      <Animation animation={{ direction: "up", delay: 0.2 }} className="flex items-center flex-col gap-11">
        <h1 className="text-5xl font-bold text-center">Contacto</h1>
        <form className="bg-indigo-800 px-5 py-10 rounded  md:w-[450px] w-full">
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <textarea
              className="h-44 w-full resize-none rounded px-3 py-3 text-xl bg-nav outline-none"
              name="message"
              id="message"
              placeholder="Mensaje"
              rows={5}
            ></textarea>
            <button className="btn w-full">Enviar</button>
          </div>
        </form>
        </Animation>
    </section>
  );
};

export default Contact;

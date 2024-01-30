import { Animation } from "@/components/animation/Animation";
import { Form } from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="">
      <Animation
        animation={{ direction: "up", delay: 0.2 }}
        className="flex items-center flex-col gap-11"
      >
        <h1 className="text-5xl font-bold text-center py-4">Contacto</h1>
        <Form />
      </Animation>
    </section>
  );
};

export default Contact;

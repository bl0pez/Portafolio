"use client";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImSpinner2 } from "react-icons/im";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!res.ok) throw new Error(await res.json().then((e) => e.message));
      toast.success("Mensaje enviado correctamente");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="px-5 py-10 rounded  md:w-[450px] w-full"
      onSubmit={onSubmit}
    >
      <div className="grid gap-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-44 w-full resize-none rounded px-3 py-3 text-xl border border-primary bg-transparent outline-none"
          name="message"
          id="message"
          placeholder="Mensaje"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          disabled={isLoading}
          className={`flex justify-center items-center gap-2 btn w-full bg-primary px-3 py-3 rounded hover:bg-primaryHover transition-colors duration-500 ${
            isLoading && "opacity-50 cursor-not-allowed"
          } `}
        >
          {
            // eslint-disable-next-line @next/next/no-img-element
            isLoading ? (
              <ImSpinner2 className="animate-spin w-5 h-5" />
            ) : (
              <MdSend className="w-5 h-5" />
            )
          }
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

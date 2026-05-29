"use client";

import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useIntersectionObserver from "@/hook";

interface FormData {
  Name: string;
  Email: string;
  Company?: string;
  Message: string;
}

const schema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  Email: yup.string().email("Please enter a valid email").required("Email is required"),
  Company: yup.string().optional(),
  Message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mdkggogq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Sorry, there was an error. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-[#1a1a1a] border ${
      hasError ? "border-red-500" : "border-white/40 focus:border-blue-500"
    } px-4 py-3 text-white placeholder-white/30 text-sm transition-colors duration-300 focus:outline-none`;

  return (
    <section className="bg-[#0d0d0d] text-white px-8 md:px-16 pt-[9rem] ">
      <div
        ref={ref}
        className={`max-w-3xl transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-3">
          GET IN TOUCH
        </h1>
        <p className="text-white/40 text-sm mb-10">
          Got a project or a quick question? Send me a message and I'll reply in no time.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                {...register("Name")}
                className={inputClass(!!errors.Name)}
              />
              {errors.Name && (
                <p className="text-red-400 text-xs mt-1">{errors.Name.message}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                {...register("Email")}
                className={inputClass(!!errors.Email)}
              />
              {errors.Email && (
                <p className="text-red-400 text-xs mt-1">{errors.Email.message}</p>
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <input
              type="text"
              placeholder="Company (Optional)"
              {...register("Company")}
              className={inputClass(false)}
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Tell me about the project *"
              {...register("Message")}
              rows={7}
              className={`${inputClass(!!errors.Message)} resize-none`}
            />
            {errors.Message && (
              <p className="text-red-400 text-xs mt-1">{errors.Message.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-4 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
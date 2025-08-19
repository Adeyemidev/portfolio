

"use client"

import { useState} from 'react';
import * as yup from 'yup';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useIntersectionObserver from '@/hook';
import Link from 'next/link';

import { notify,useToast, showToast } from './ui/toastify'; 

interface FormData {
  Name: string;
  Email: string;
  Message: string;
}

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();

  const schema = yup.object().shape({
    Name: yup.string().required('Name is required'),
    Email: yup.string().email('Please enter a valid email').required('Email is required'),
    Message: yup.string().required('Message is required')
  });

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdkggogq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        toast.success('Thank you! Your message has been sent.');
        reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Sorry, there was an error sending your message. Please wait.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const transform = "transition-all duration-300 transform hover:scale-110 hover:rotate-12";

  return (
    <section id='contact' className="py-20 relative">
      <div className="absolute"></div>
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="lg:flex items-start justify-between gap-16">
          <div className={`lg:w-1/2 mb-12 lg:mb-0 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
              Contact
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Get in touch or shoot me an email directly on <strong>adeyemiezekiel26@gmail.com</strong> and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  {...register('Name')}
                  className={`w-full bg-transparent border-b-2 ${
                    errors.Name ? 'border-red-500' : 'border-gray-700 focus:border-blue-400'
                  } pb-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none`}
                />
                {errors.Name && (
                  <p className="text-red-400 text-sm mt-1">{errors.Name.message}</p>
                )}
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  {...register('Email')}
                  className={`w-full bg-transparent border-b-2 ${
                    errors.Email ? 'border-red-500' : 'border-gray-700 focus:border-blue-400'
                  } pb-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none`}
                />
                {errors.Email && (
                  <p className="text-red-400 text-sm mt-1">{errors.Email.message}</p>
                )}
              </div>

              <div className="relative">
                <textarea
                  placeholder="Project details"
                  {...register('Message')}
                  rows={4}
                  className={`w-full bg-transparent border-b-2 ${
                    errors.Message ? 'border-red-500' : 'border-gray-700 focus:border-blue-400'
                  } pb-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none resize-none`}
                />
                {errors.Message && (
                  <p className="text-red-400 text-sm mt-1">{errors.Message.message}</p>
                )}
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border bg-white from-green-400 to-blue-500 px-8 py-4 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <h3 className="text-2xl font-bold">
              EasyCode
            </h3>
            
            <div className="flex space-x-6 items-center">
              <Link href="https://x.com/easycode01" target="_blank" rel="noopener noreferrer">
                <BsTwitterX className={`h-8 w-5 ${transform}`} />
              </Link>

              <Link href="https://github.com/Adeyemidev" target="_blank" rel="noopener noreferrer">
                <FaGithub className={`h-8 w-5 ${transform}`} />
              </Link>

              <Link href="https://linkedin.com/in/adeyemi-moses1" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={`h-8 w-5 ${transform}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
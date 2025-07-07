"use client"

import { useState} from 'react';
import * as yup from 'yup';
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useIntersectionObserver from '@/hook';
import { toast } from 'react-toastify';


interface FormData {
  Name: string;
  Email: string;
  Message: string;
}

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        toast.success('Thank you! Your message has been sent successfully.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        reset();
      } else {
        toast.error('Failed to send message. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error('Sorry, there was an error sending your message. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="py-20 relative">
      <div className="absolute"></div>
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="lg:flex items-start justify-between gap-16">
          <div className={`lg:w-1/2 mb-12 lg:mb-0 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg- gradient-to-r from -blue-400 to- cyan-400 bg-clip- text text -transparent">
              Contact
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as possible.
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
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
            
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/adeyemi-moses1" 
                 className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:adeyemiezekiel26@gmail.com" 
                 className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <IoMdMail size={24} />
              </a>
              <a href="https://github.com" 
                 className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/easycode01" 
                 className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <BsTwitterX size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
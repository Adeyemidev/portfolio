

"use client"

import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import net from '../../public/images/net.png';
import { yupResolver } from '@hookform/resolvers/yup';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  interface FormData {
    Name: string;
    Email: string;
    Message: string;
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    try {
      const response = await fetch('https://formspree.io/f/mdkggogq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        reset(); 
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
       
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
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className='bg-darkgrey pt-8'>
      <section id='contact' className='py-[52px] container lg:flex text-center items-start justify-center lg:justify-between'>
        <div className='text-center lg:text-left pb-20'>
          <h1 className='text-[2.270em] leading-[40px] tracking-[-1.14px] sm:leading-[72px] sm:tracking-[-2.05px] md:leading-extralarge md:tracking-tight font-bold'>Contact</h1>
          <p className='text-center lg:text-left text-smallest sm:text-smaller pt-6 leading-[26px] sm:leading-normal lg:max-w-[65%] max -w-md text-gray'>
            I would love to hear about your project and how I could help.
            Please fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="text-right w-full lg:w-auto">
          {submitSuccess && (
            <div className="text-green-500 mb-4 text-left">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitError && (
            <div className="text-red-500 mb-4 text-left">
              There was a problem sending your message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="outline-none">
            <div className='mb-6 text-left'> 
              <input 
                type='text' 
                placeholder="Name"
                className="border-b w-full md:px-4 lg:px-0 pb-4 bg-transparent focus:outline-none focus:border-white transition-colors"
                {...register("Name")}
              />
              {errors.Name && (
                <span className="text-red-500 text-sm block mt-1">{errors.Name.message}</span>
              )}
            </div>

            <div className='mb-6 text-left'>
              <input 
                type='email' 
                placeholder="Email" 
                className="border-b w-full md:px-4 lg:px-0 py-4 bg-transparent focus:outline-none focus:border-white transition-colors" 
                {...register("Email")}
              />
              {errors.Email && (
                <span className="text-red-500 text-sm block mt-1">{errors.Email.message}</span>
              )}
            </div>

            <div className='mb-6 text-left'>
              <textarea 
                placeholder="Project details" 
                className="border-b w-full lg:w-96 md:px-4 lg:px-0 py-4 bg-transparent focus:outline-none focus:border-white transition-colors min-h-[100px]" 
                {...register("Message")}

              />
              {errors.Message && (
                <span className="text-red-500 text-sm block mt-1">{errors.Message.message}</span>
              )}
            </div>

            <div className="text-right">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className='font-bold text-[16px] leading-normal tracking-[2.29] py-4 sendMessage hover:text-gray transition-colors disabled:opacity-50'
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
        </div>
      </section>
      
      <Image id='imageNet' src={net} alt="Network background" />
      
      <nav id="nav" className="container sm:flex sm:justify-between pt-8 mb-0 pb-20 border-t text-center sm:text-left items-center">
        <h3 className="text-small sm:text-medium font-medium leading-medium tracking-small">EasyCode</h3>

        <ul className="md:gap-4 mt-5 md:mt-0 items-center md:mr-8 grid grid-flow-col mx-20 sm:mx-0 place-items-center">
          <li>
            <a href="https://linkedin.com/in/adeyemi-moses1" aria-label="LinkedIn Profile" className="hover:text-gray transition-colors">
              <FaLinkedin size={26} />
            </a>
          </li>
          <li>
            <a href="mailto:adeyemiezekiel26@gmail.com" aria-label="Email Contact" className="hover:text-gray transition-colors">
              <IoMdMail size={26} />
            </a>
          </li>
          <li>
            <a href="https://github.com" aria-label="GitHub Profile" className="hover:text-gray transition-colors">
              <FaGithub size={26} />
            </a>
          </li>
          <li>
            <a href="https://x.com/easycode01?t=XbtFtZ4qzl97gErjSosZsQ&s=09" aria-label="Twitter Profile" className="hover:text-gray transition-colors">
              <BsTwitterX size={26} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Contact;
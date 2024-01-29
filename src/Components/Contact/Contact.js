import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqgvvaq");
  if (state.succeeded) {
      return <div className='contact__succeed__message__container'><h2 className='contact__succeed__message'>Thank you, your message has been sent!</h2></div>
      
  }
  return (
      <form onSubmit={handleSubmit} className='contact__form'>
      <label htmlFor="email" className='contact__title'>
        If you want to contact me, just call or message me.
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='contact__input'
        placeholder='Your Email Address'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className='contact__textarea'
        placeholder='Write your message please'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='contact__btn'>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import { ToastContext } from '@/c/ToastProvider';


function ContactPage() {
  const { createToast } = React.useContext(ToastContext);
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    console.log("handling submit");
    router.push('/exercises/02-flash-messages');
    createToast("Message sent!", "success");
  }
  return (
    <main>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;

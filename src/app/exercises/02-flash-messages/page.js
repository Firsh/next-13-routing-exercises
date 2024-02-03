'use client';
import React from 'react';
import Link from 'next/link';
import Toast from '@/c/Toast';
import { createPortal } from 'react-dom';
import ToastShelf from '@/c/ToastShelf';
import { ToastContext } from '@/c/ToastProvider';

function FlashMsgExercise({ params, searchParams }) {
  const { createToast, toasts } = React.useContext(ToastContext);
  const mess = "Message sent!";
  React.useEffect(() => {
    if (searchParams.from === 'contact') {
      if (toasts.length !== 0) {
        if (toasts[0].message !== mess) {
        }
      } else {
        createToast(mess, "success");
      }
    }
  }, []);
  return (
    <main>
      <h1>Welcome to my website!</h1>
      <p>
        Got feedback? Please{' '}
        <Link href="/exercises/02-flash-messages/contact">
          contact us
        </Link>
        .
      </p>
      <ToastShelf />
    </main>
  );
}

export default FlashMsgExercise;

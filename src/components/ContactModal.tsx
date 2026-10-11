import { useEffect, useRef, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  useScrollLock(true);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    nameInputRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.();
    };
  }, [onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !reason.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    if (!profile.formspreeEndpoint) {
      // Graceful fallback when endpoint is not configured in environment
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Contact from ${name.trim()}`
      )}&body=${encodeURIComponent(
        `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nReason / Message:\n${reason.trim()}`
      )}`;
      setStatus('success');
      return;
    }

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          reason: reason.trim(),
          message: reason.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
            'Failed to transmit message. Please try again or email directly.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please check your connection or reach out via email.');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setReason('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        data-lenis-prevent
        className="relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl border border-white/10 bg-ink-2 p-6 shadow-2xl sm:p-10"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.25 } }}
        transition={{ duration: 0.5, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient effect */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full bg-crimson/20 blur-[60px]"
        />

        {/* Close button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          data-cursor="close"
          aria-label="Close contact dialog"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone backdrop-blur transition hover:bg-white/20 sm:right-6 sm:top-6"
        >
          ✕
        </button>

        <header className="mb-6">
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-crimson-2">
            <span className="font-display text-lg tracking-normal">R</span>
            Direct Transmission
          </p>
          <h2 id="contact-modal-title" className="mt-1 font-display text-3xl tracking-wide text-bone sm:text-4xl">
            LET&apos;S BUILD SOMETHING
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-mist sm:text-sm">
            Have a project in mind, career opportunity, or collaboration? Send a transmission and I&apos;ll get back to you promptly.
          </p>
        </header>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="my-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/20 text-2xl text-emerald-400">
                ✓
              </div>
              <h3 className="font-display text-2xl text-bone">TRANSMISSION RECEIVED</h3>
              <p className="mt-2 text-sm text-bone/80">
                Thank you, <span className="font-semibold text-white">{name}</span>! Your message has been routed to my inbox. I&apos;ll get in touch with you at <span className="text-white font-medium">{email}</span> soon.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md bg-bone px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-ink transition hover:bg-white"
                >
                  Close Window
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-mist transition hover:text-bone hover:border-white/40"
                >
                  Send Another
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {status === 'error' && errorMessage && (
                <div className="rounded-lg border border-crimson/40 bg-crimson/15 p-3 text-xs text-bone">
                  <p className="font-medium text-crimson-2">{errorMessage}</p>
                  <p className="mt-1 text-smoke">
                    Alternative: reach me directly at{' '}
                    <a href={`mailto:${profile.email}`} className="text-bone underline hover:text-white">
                      {profile.email}
                    </a>
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="contact-name" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                  Your Name <span className="text-crimson-2">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  disabled={status === 'submitting'}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-sm text-bone placeholder-smoke/60 outline-none transition focus:border-crimson-2 focus:ring-1 focus:ring-crimson-2 disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                  Email Address <span className="text-crimson-2">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  disabled={status === 'submitting'}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-sm text-bone placeholder-smoke/60 outline-none transition focus:border-crimson-2 focus:ring-1 focus:ring-crimson-2 disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contact-reason" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                  Reason to Contact <span className="text-crimson-2">*</span>
                </label>
                <textarea
                  id="contact-reason"
                  name="reason"
                  required
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Tell me about your project, role, or how we might collaborate..."
                  disabled={status === 'submitting'}
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/15 bg-ink px-4 py-3 text-sm text-bone placeholder-smoke/60 outline-none transition focus:border-crimson-2 focus:ring-1 focus:ring-crimson-2 disabled:opacity-50"
                />
              </div>

              <div className="pt-2">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    data-cursor="play"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-crimson py-3.5 text-sm font-bold tracking-[0.14em] text-white shadow-[0_0_40px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <span>▶</span>
                        <span>SEND TRANSMISSION</span>
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>

              <p className="text-center text-[11px] text-smoke">
                Powered by Formspree · Direct routing to {profile.email}
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

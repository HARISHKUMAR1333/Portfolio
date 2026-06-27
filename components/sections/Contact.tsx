"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Copy,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import {
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";

const contactItems: { icon: LucideIcon; label: string; value: string; href: string }[] = [
  { icon: Mail, label: "Email", value: profile.email, href: profile.socials.email },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.socials.phone },
  { icon: MapPin, label: "Location", value: profile.location, href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: profile.socials.linkedin },
  // GitHub hidden for now — uncomment to re-enable once the profile URL is ready.
  // { icon: Github, label: "GitHub", value: "View my code", href: profile.socials.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3800);
  };

  // Copies the address to the clipboard, with a legacy fallback for older /
  // insecure-context browsers where navigator.clipboard is unavailable.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast("Email copied to clipboard ✦ " + profile.email);
      return true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = profile.email;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        ta.remove();
        showToast("Email copied to clipboard ✦ " + profile.email);
        return true;
      } catch {
        showToast("Email me at " + profile.email);
        return false;
      }
    }
  };

  const openMail = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const to = encodeURIComponent(profile.email);
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    // Copy the address first as a backup (in case neither client opens).
    void navigator.clipboard?.writeText(profile.email).catch(() => {});

    // Open Gmail's web compose pre-filled in a new tab. If the pop-up is
    // blocked, fall back to the OS default mail app via mailto.
    const win = window.open(gmail, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = mailto;

    setSent(true);
    showToast("Opening Gmail with your message… address copied as a backup.");
    setTimeout(() => setSent(false), 4000);
  };

  // Triggered by the Send button: validate first, then open the mail client.
  const handleSend = () => {
    const formEl = formRef.current;
    if (formEl && !formEl.reportValidity()) return; // shows native validation hints
    openMail();
  };

  // Triggered by Enter / native form submit.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openMail();
  };

  const field =
    "peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-transparent outline-none transition-all focus:border-accent-violet/60 focus:bg-white/[0.05] focus:shadow-glow";
  const label =
    "pointer-events-none absolute left-4 top-3.5 text-sm text-white/40 transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent-violet peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-ink-950 peer-[:not(:placeholder-shown)]:px-1 peer-focus:bg-ink-950 peer-focus:px-1";
  const cardClass =
    "group flex w-full items-center gap-4 rounded-2xl glass p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-glow";

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto w-[min(1100px,92%)]">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a role, a project, or an idea? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: contact details */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {contactItems.map((item) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-violet ring-1 ring-white/10 transition-transform group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium text-white/80">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              // Email is click-to-copy (with a visible copy icon) so visitors
              // without a mail app can still grab the address.
              if (item.label === "Email") {
                return (
                  <motion.button
                    key={item.label}
                    type="button"
                    variants={fadeLeft}
                    onClick={copyEmail}
                    className={cardClass}
                    aria-label={`Copy email address ${item.value}`}
                  >
                    {inner}
                    <Copy className="ml-auto h-4 w-4 flex-shrink-0 text-white/40 transition-colors group-hover:text-accent-violet" />
                  </motion.button>
                );
              }

              return (
                <motion.a
                  key={item.label}
                  variants={fadeLeft}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right: form */}
          <motion.form
            ref={formRef}
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="rounded-3xl glass-strong p-7"
          >
            <div className="space-y-6">
              <div className="relative">
                <input
                  id="name"
                  className={field}
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <label htmlFor="name" className={label}>
                  Your name
                </label>
              </div>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  className={field}
                  placeholder="Your email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <label htmlFor="email" className={label}>
                  Your email
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  className={`${field} resize-none`}
                  placeholder="Your message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <label htmlFor="message" className={label}>
                  Your message
                </label>
              </div>

              <MagneticButton onClick={handleSend} className="w-full">
                <Send className="h-4 w-4" />
                {sent ? "Opening Gmail…" : "Send Message"}
              </MagneticButton>

              <p className="text-center text-xs text-white/40">
                Opens Gmail pre-filled. Prefer another app?{" "}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="font-medium text-accent-violet underline-offset-2 hover:underline"
                >
                  Copy my email
                </button>{" "}
                instead.
              </p>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-3 rounded-2xl glass-strong px-5 py-3.5 shadow-glow"
            role="status"
            aria-live="polite"
          >
            <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple">
              <Check className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm font-medium text-white/85">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

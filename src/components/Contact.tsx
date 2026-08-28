import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Loader2, AlertCircle, Send } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '5d1ba3ea-4062-4e3f-a702-ce1d838edf11',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `${formData.name} via Portfolio`,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus('success');
      } else {
        const mailtoUrl = `mailto:${developerProfile.socials.email}?subject=${encodeURIComponent(
          `Portfolio Contact from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus('success');
      }
    } catch {
      const mailtoUrl = `mailto:${developerProfile.socials.email}?subject=${encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('success');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(formData.name ? `Project inquiry from ${formData.name}` : 'Project Inquiry');
    const body = encodeURIComponent(formData.message ? `${formData.message}\n\nFrom: ${formData.name} (${formData.email})` : '');
    window.location.href = `mailto:${developerProfile.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10 border-t border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-medium block mb-2">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            Have a project opportunity, architecture inquiry, or want to connect? Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Left Info Column */}
          <div className="md:col-span-5 space-y-4">

            {/* Email Box */}
            <div className="apple-card rounded-3xl p-6 space-y-4">
              <div>
                <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider block font-medium mb-1">
                  Direct Email
                </span>
                <p className="text-sm text-[var(--text-primary)] font-medium truncate">
                  {developerProfile.socials.email}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full apple-button-secondary py-2.5 px-4 rounded-2xl text-xs font-medium flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDirectMailto}
                  className="w-full text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1.5 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="apple-card rounded-3xl p-6 space-y-3">
              <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider block font-medium mb-1">
                Professional Channels
              </span>

              <div className="flex flex-col gap-2">
                <a
                  href={developerProfile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[var(--pill-bg)] transition-colors text-xs text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-2.5">
                    <TechIcon name="github" className="w-4 h-4 text-[var(--text-secondary)]" />
                    <span>GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                </a>

                <a
                  href={developerProfile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[var(--pill-bg)] transition-colors text-xs text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[var(--text-secondary)]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                </a>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="apple-card rounded-3xl p-8">
              {status === 'success' ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">Message Dispatched!</h3>
                    <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out, {formData.name || 'there'}. I have received your transmission and will get back to you shortly at <span className="text-[var(--text-primary)] font-medium">{formData.email}</span>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="apple-button-secondary px-5 py-2.5 rounded-full text-xs font-medium mt-2 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage || 'Failed to dispatch message. You can also email directly.'}</span>
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-medium text-[var(--text-secondary)] block mb-1.5">
                      Your Name <span className="text-[var(--text-primary)]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--input-focus)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[var(--text-secondary)] block mb-1.5">
                      Email Address <span className="text-[var(--text-primary)]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--input-focus)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[var(--text-secondary)] block mb-1.5">
                      Message <span className="text-[var(--text-primary)]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project, team opportunity, or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--input-focus)] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full apple-button-primary py-3 rounded-2xl text-xs font-semibold tracking-tight mt-2 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[var(--btn-primary-text)]" />
                        <span>Dispatching Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

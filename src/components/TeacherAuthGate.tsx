import React, { useState } from 'react';
import { Lock, Mail, ShieldCheck, ArrowRight, KeyRound, AlertCircle, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { TEACHER_AUTHORIZED_EMAIL, setTeacherAuthenticated } from '../utils/storage';

interface TeacherAuthGateProps {
  onAuthenticated: () => void;
}

const TEACHER_SECRET_PASSWORD = 'ToGodBeTheGlory*';

export const TeacherAuthGate: React.FC<TeacherAuthGateProps> = ({ onAuthenticated }) => {
  const [emailInput, setEmailInput] = useState(TEACHER_AUTHORIZED_EMAIL);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();

    if (!cleanEmail) {
      setErrorMsg('Please enter your authorized instructor email address.');
      setIsSubmitting(false);
      return;
    }

    if (cleanEmail !== TEACHER_AUTHORIZED_EMAIL.toLowerCase()) {
      setErrorMsg(
        `Access Denied. The Teacher Portal is restricted exclusively to Ms. Maria via ${TEACHER_AUTHORIZED_EMAIL}.`
      );
      setIsSubmitting(false);
      return;
    }

    if (!cleanPassword) {
      setErrorMsg('Please enter your secret instructor password.');
      setIsSubmitting(false);
      return;
    }

    if (cleanPassword !== TEACHER_SECRET_PASSWORD) {
      setErrorMsg('Incorrect instructor password. Access is strictly restricted to Ms. Maria.');
      setIsSubmitting(false);
      return;
    }

    // Success: authenticated
    setTeacherAuthenticated(true, TEACHER_AUTHORIZED_EMAIL);
    onAuthenticated();
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
      <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-8 sm:p-10 shadow-lg text-center space-y-6">
        {/* Lock Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-inner">
          <Lock size={36} />
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 rounded-full text-[#4A5D4E] inline-block mb-3">
            Protected Instructor Access
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif italic text-[#1A1A1A]">
            Teacher Portal Verification
          </h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/70 font-sans">
            Prepared exclusively for <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-[#1A1A1A] underline">Ms. Maria</a>.
          </p>
        </div>

        <div className="rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10 p-5 text-left text-xs sm:text-sm space-y-2.5">
          <div className="flex items-center gap-2 font-bold text-[#1A1A1A]">
            <ShieldCheck size={16} className="text-[#4A5D4E]" />
            <span>Strict Security & Password Gate</span>
          </div>
          <p className="text-[#1A1A1A]/70 font-sans leading-relaxed">
            This dashboard can only be accessed by Ms. Maria through her authorized email address and private instructor password:
          </p>
          <div className="rounded-lg bg-white border border-[#1A1A1A]/10 px-3 py-2 text-xs font-mono font-bold text-[#1A1A1A] flex items-center justify-between">
            <span>{TEACHER_AUTHORIZED_EMAIL}</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#4A5D4E] bg-[#4A5D4E]/10 px-2 py-0.5 rounded">
              Authorized Account
            </span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 pt-2 text-left">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 block">
              Instructor Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" size={16} />
              <input
                id="input-teacher-email"
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="elevatewithmsmaria@gmail.com"
                required
                className="w-full rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] pl-10 pr-4 py-3 text-sm font-mono font-medium text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Secret Password Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 block">
              Secret Instructor Password
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" size={16} />
              <input
                id="input-teacher-password"
                type={showPassword ? 'text' : 'password'}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••••••••••"
                required
                autoFocus
                className="w-full rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] pl-10 pr-11 py-3 text-sm font-mono font-medium text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
              />
              <button
                type="button"
                id="btn-toggle-teacher-pwd-visibility"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors p-1"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="flex items-start gap-2 rounded-xl bg-[#C25E3E]/10 border border-[#C25E3E]/20 p-3 text-xs text-[#C25E3E] font-medium">
              <AlertCircle size={15} className="shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              id="btn-teacher-login-submit"
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] py-3.5 px-6 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors disabled:opacity-50"
            >
              <KeyRound size={16} />
              <span>Unlock Teacher Portal</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>

        <div className="pt-2 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-[#1A1A1A]/60">
          <span>Official Channels:</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/elevatewithmsmaria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-serif italic font-bold text-[#1A1A1A] hover:text-[#4A5D4E] underline"
            >
              FB: @elevatewithmsmaria
              <ExternalLink size={11} />
            </a>
            <span>•</span>
            <a
              href="https://www.instagram.com/elevate.with.maria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-serif italic font-bold text-[#1A1A1A] hover:text-[#C25E3E] underline"
            >
              IG: @elevate.with.maria
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

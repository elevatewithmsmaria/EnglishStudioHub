import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speakSentence } from '../../utils/speech';

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  rate?: number;
  label?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  className = '',
  size = 'md',
  rate = 0.9,
  label
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSpeaking(true);
    const success = speakSentence(text, rate);
    if (!success) {
      setIsSpeaking(false);
      return;
    }
    // approximate timeout based on word count
    const words = text.split(' ').length;
    const duration = Math.max(1200, (words / 2.5) * 1000);
    setTimeout(() => {
      setIsSpeaking(false);
    }, duration);
  };

  const sizeClasses = {
    sm: 'p-1 text-xs',
    md: 'p-1.5 text-sm',
    lg: 'p-2 text-base'
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22
  };

  return (
    <button
      id={`audio-btn-${text.slice(0, 10).replace(/\s+/g, '-').toLowerCase()}`}
      onClick={handleSpeak}
      type="button"
      title={`Listen to pronunciation: "${text}"`}
      aria-label={`Listen to: ${text}`}
      className={`inline-flex items-center gap-1.5 rounded-lg border font-medium transition-all ${
        isSpeaking
          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white animate-pulse'
          : 'border-[#1A1A1A]/15 bg-white text-[#1A1A1A] hover:border-[#1A1A1A]/40 hover:bg-[#F7F5F0]'
      } ${sizeClasses[size]} ${className}`}
    >
      {isSpeaking ? (
        <Volume2 size={iconSizes[size]} className="animate-bounce" />
      ) : (
        <Volume2 size={iconSizes[size]} />
      )}
      {label && <span className="font-bold text-xs uppercase tracking-wider">{label}</span>}
    </button>
  );
};

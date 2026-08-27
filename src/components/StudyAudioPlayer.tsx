import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Headphones,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Music,
  CloudRain,
  Radio,
  Coffee,
  Waves
} from 'lucide-react';

export type SoundscapeType = 'lofi_piano' | 'alpha_432' | 'calm_rain' | 'cozy_ambience' | 'ocean_breeze';

interface SoundscapeConfig {
  id: SoundscapeType;
  name: string;
  tagline: string;
  icon: React.ElementType;
}

const SOUNDSCAPES: SoundscapeConfig[] = [
  {
    id: 'lofi_piano',
    name: 'Lo-Fi Study Piano',
    tagline: 'Warm pentatonic chords & gentle relaxation',
    icon: Music
  },
  {
    id: 'alpha_432',
    name: 'Alpha Waves 432Hz',
    tagline: 'Deep study focus & mental calm',
    icon: Radio
  },
  {
    id: 'calm_rain',
    name: 'Gentle Rain & Soft Pad',
    tagline: 'Soothing rain drops with ambient warmth',
    icon: CloudRain
  },
  {
    id: 'cozy_ambience',
    name: 'Cozy Library & Cafe',
    tagline: 'Soft acoustic resonance & peace',
    icon: Coffee
  },
  {
    id: 'ocean_breeze',
    name: 'Ocean Meditation',
    tagline: 'Calm tidal waves & gentle drone',
    icon: Waves
  }
];

export const StudyAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundscape, setSoundscape] = useState<SoundscapeType>('lofi_piano');
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Audio Context and Nodes Ref
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const rainSourceRef = useRef<AudioNode | null>(null);

  // Initialize or resume audio context
  const getAudioContext = (): AudioContext => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtxClass();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume, ctx.currentTime);
      masterGain.connect(ctx.destination);

      audioCtxRef.current = ctx;
      masterGainRef.current = masterGain;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Stop active synthesis
  const stopSynthesis = () => {
    if (synthIntervalRef.current) {
      window.clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (rainSourceRef.current) {
      try {
        (rainSourceRef.current as any).stop?.();
        rainSourceRef.current.disconnect();
      } catch (e) {
        // Ignored
      }
      rainSourceRef.current = null;
    }
  };

  // Start sound generation based on selected soundscape
  const startSoundscape = (type: SoundscapeType) => {
    stopSynthesis();
    const ctx = getAudioContext();
    const master = masterGainRef.current;
    if (!ctx || !master) return;

    if (type === 'lofi_piano') {
      // Gentle warm pentatonic melodic chords (C4, D4, E4, G4, A4, C5, D5, E5)
      const frequencies = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];
      const chords = [
        [261.63, 329.63, 392.0, 493.88], // Cmaj7
        [220.0, 261.63, 329.63, 392.0],  // Am7
        [174.61, 220.0, 261.63, 329.63], // Fmaj7
        [196.0, 246.94, 293.66, 392.0]   // G7
      ];

      let chordIndex = 0;

      const playPianoChord = () => {
        if (!isPlaying && !audioCtxRef.current) return;
        const now = ctx.currentTime;
        const chord = chords[chordIndex % chords.length];
        chordIndex++;

        // Play chord tones with soft attack and decay
        chord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = i === 0 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.08);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(800, now);

          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.linearRampToValueAtTime(0.08, now + 0.1 + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(master);

          osc.start(now + i * 0.08);
          osc.stop(now + 4.0);
        });

        // Add a gentle soft high melody note
        const melodyFreq = frequencies[Math.floor(Math.random() * frequencies.length)];
        const melodyOsc = ctx.createOscillator();
        const melodyGain = ctx.createGain();
        melodyOsc.type = 'sine';
        melodyOsc.frequency.setValueAtTime(melodyFreq * 1.5, now + 1.2);

        melodyGain.gain.setValueAtTime(0.0001, now + 1.2);
        melodyGain.gain.linearRampToValueAtTime(0.04, now + 1.4);
        melodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

        melodyOsc.connect(melodyGain);
        melodyGain.connect(master);

        melodyOsc.start(now + 1.2);
        melodyOsc.stop(now + 3.6);
      };

      playPianoChord();
      synthIntervalRef.current = window.setInterval(playPianoChord, 4200);
    } else if (type === 'alpha_432') {
      // 432Hz calming alpha drone with binaural beats (432Hz left, 442Hz right = 10Hz Alpha difference)
      const baseFreq = 432;
      const beatFreq = 10; // 10Hz Alpha brainwave state for relaxed focus

      const oscLeft = ctx.createOscillator();
      const oscRight = ctx.createOscillator();
      const gain = ctx.createGain();

      oscLeft.type = 'sine';
      oscLeft.frequency.setValueAtTime(baseFreq, ctx.currentTime);

      oscRight.type = 'sine';
      oscRight.frequency.setValueAtTime(baseFreq + beatFreq, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 1.5);

      oscLeft.connect(gain);
      oscRight.connect(gain);
      gain.connect(master);

      oscLeft.start();
      oscRight.start();
      rainSourceRef.current = gain;
    } else if (type === 'calm_rain') {
      // Pink noise synthesis for relaxing rain
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const rainFilter = ctx.createBiquadFilter();
      rainFilter.type = 'lowpass';
      rainFilter.frequency.setValueAtTime(1000, ctx.currentTime);

      const rainGain = ctx.createGain();
      rainGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      rainGain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 1.0);

      whiteNoise.connect(rainFilter);
      rainFilter.connect(rainGain);
      rainGain.connect(master);

      whiteNoise.start();
      rainSourceRef.current = whiteNoise;
    } else if (type === 'cozy_ambience') {
      // Warm resonant pads and soft chime intervals
      const warmChord = [130.81, 196.0, 246.94, 329.63]; // C3, G3, B3, E4
      warmChord.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 2.0);

        osc.connect(gain);
        gain.connect(master);
        osc.start();
      });

      const playChime = () => {
        if (!audioCtxRef.current) return;
        const now = ctx.currentTime;
        const chimeFreq = [523.25, 659.25, 783.99, 987.77][Math.floor(Math.random() * 4)];
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(chimeFreq, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

        osc.connect(gain);
        gain.connect(master);

        osc.start(now);
        osc.stop(now + 3.2);
      };

      synthIntervalRef.current = window.setInterval(playChime, 3600);
    } else if (type === 'ocean_breeze') {
      // Ocean wave sweeps
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.05;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const waveFilter = ctx.createBiquadFilter();
      waveFilter.type = 'bandpass';
      waveFilter.frequency.setValueAtTime(300, ctx.currentTime);
      waveFilter.Q.setValueAtTime(3, ctx.currentTime);

      const waveGain = ctx.createGain();
      waveGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      waveGain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 1.0);

      // Modulate filter for wave swooshes
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // 8 second wave cycle
      lfoGain.gain.setValueAtTime(250, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(waveFilter.frequency);

      noise.connect(waveFilter);
      waveFilter.connect(waveGain);
      waveGain.connect(master);

      noise.start();
      lfo.start();
      rainSourceRef.current = noise;
    }
  };

  // Toggle playback
  const togglePlay = () => {
    if (isPlaying) {
      stopSynthesis();
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      const ctx = getAudioContext();
      ctx.resume().then(() => {
        setIsPlaying(true);
        startSoundscape(soundscape);
      });
    }
  };

  // Handle soundscape switch
  const handleSelectSoundscape = (type: SoundscapeType) => {
    setSoundscape(type);
    if (isPlaying) {
      startSoundscape(type);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(isMuted ? 0 : val, audioCtxRef.current.currentTime);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(nextMuted ? 0 : volume, audioCtxRef.current.currentTime);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSynthesis();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  const activeSoundscapeObj = SOUNDSCAPES.find((s) => s.id === soundscape) || SOUNDSCAPES[0];
  const IconComponent = activeSoundscapeObj.icon;

  return (
    <div
      id="study-audio-player-container"
      className="fixed bottom-16 md:bottom-4 right-3 sm:right-4 z-40 transition-all select-none max-w-[calc(100vw-24px)] sm:max-w-none"
    >
      {/* Mini Bar or Full Panel */}
      <div className="rounded-2xl border border-[#1A1A1A]/15 bg-[#FDFCF9]/95 backdrop-blur-md shadow-xl text-[#1A1A1A] overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 bg-[#F7F5F0]/80 border-b border-[#1A1A1A]/10">
          <div className="flex items-center gap-2">
            <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${isPlaying ? 'bg-[#4A5D4E] text-white' : 'bg-[#1A1A1A]/10 text-[#1A1A1A]'}`}>
              <Headphones size={15} className={isPlaying ? 'animate-pulse' : ''} />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-serif italic font-bold leading-none text-[#1A1A1A]">
                  Study Music
                </span>
                {isPlaying && (
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#4A5D4E] animate-ping" />
                )}
              </div>
              <span className="text-[10px] text-[#1A1A1A]/60 font-mono">
                {activeSoundscapeObj.name}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Play/Pause Button */}
            <button
              id="btn-toggle-study-music"
              onClick={togglePlay}
              title={isPlaying ? 'Pause relaxing study music' : 'Play relaxing study music'}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all ${
                isPlaying
                  ? 'bg-[#1A1A1A] text-white hover:bg-[#333]'
                  : 'bg-[#4A5D4E] text-white hover:bg-[#3B4B3E]'
              }`}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
            </button>

            {/* Expand / Minimize Toggle */}
            <button
              id="btn-expand-study-player"
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Minimize study player' : 'Expand soundscape options'}
              className="p-1 rounded-md text-[#1A1A1A]/50 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A] transition-colors"
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </button>
          </div>
        </div>

        {/* Expanded Soundscape Picker & Volume Controls */}
        {isExpanded && (
          <div className="p-3.5 space-y-3.5 w-72 sm:w-80">
            {/* Soundscape List */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block mb-1">
                Select Calming Soundscape
              </span>
              <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {SOUNDSCAPES.map((sc) => {
                  const ScIcon = sc.icon;
                  const isSelected = soundscape === sc.id;
                  return (
                    <button
                      key={sc.id}
                      id={`soundscape-opt-${sc.id}`}
                      onClick={() => handleSelectSoundscape(sc.id)}
                      className={`flex items-center justify-between gap-2.5 rounded-xl px-3 py-2 text-left text-xs transition-all border ${
                        isSelected
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/10 hover:bg-[#F7F5F0]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ScIcon size={14} className={isSelected ? 'text-white' : 'text-[#1A1A1A]/60'} />
                        <div>
                          <div className="leading-tight">{sc.name}</div>
                          <div className={`text-[10px] ${isSelected ? 'text-white/70' : 'text-[#1A1A1A]/50'}`}>
                            {sc.tagline}
                          </div>
                        </div>
                      </div>

                      {isSelected && isPlaying && (
                        <div className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 h-full bg-white animate-pulse" />
                          <span className="w-0.5 h-2/3 bg-white animate-pulse delay-75" />
                          <span className="w-0.5 h-4/5 bg-white animate-pulse delay-150" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Volume Control */}
            <div className="pt-2 border-t border-[#1A1A1A]/10 flex items-center justify-between gap-3">
              <button
                onClick={toggleMute}
                title={isMuted ? 'Unmute' : 'Mute'}
                className="text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
              >
                {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>

              <input
                id="slider-study-volume"
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full accent-[#1A1A1A] h-1.5 bg-[#1A1A1A]/10 rounded-lg cursor-pointer"
              />

              <span className="text-[11px] font-mono font-bold text-[#1A1A1A]/60 w-8 text-right">
                {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
              </span>
            </div>

            <p className="text-[10px] text-[#1A1A1A]/50 font-serif italic text-center">
              Calming ambient music designed to soothe stress & boost grammar retention.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

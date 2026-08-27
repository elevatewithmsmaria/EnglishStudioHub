import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  MicOff,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  Clock,
  FileText,
  HelpCircle,
  Eye,
  EyeOff,
  Check,
  X,
  Sliders,
  Send,
  Zap,
  Flame,
  BookmarkCheck,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  LISTENING_TESTS,
  READING_TESTS,
  WRITING_TESTS,
  SPEAKING_TESTS
} from '../data/skillsTestData';
import {
  SkillCategory,
  ListeningTest,
  ReadingTest,
  WritingTest,
  SpeakingTest,
  UserProgress
} from '../types';
import { speakSentence, stopSpeech } from '../utils/speech';

interface SkillsPracticeViewProps {
  progress: UserProgress;
  onSaveSkillScore: (skill: SkillCategory, testId: string, score: number, total: number, percentage: number) => void;
  onNavigateToTopic?: (topicId: string) => void;
}

export const SkillsPracticeView: React.FC<SkillsPracticeViewProps> = ({
  progress,
  onSaveSkillScore,
  onNavigateToTopic
}) => {
  const [activeSkill, setActiveSkill] = useState<SkillCategory>('listening');
  const [levelFilter, setLevelFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');

  // Active Test State
  const [activeListeningTest, setActiveListeningTest] = useState<ListeningTest | null>(null);
  const [activeReadingTest, setActiveReadingTest] = useState<ReadingTest | null>(null);
  const [activeWritingTest, setActiveWritingTest] = useState<WritingTest | null>(null);
  const [activeSpeakingTest, setActiveSpeakingTest] = useState<SpeakingTest | null>(null);

  // Audio Playback Controls
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.9);
  const [showTranscript, setShowTranscript] = useState(false);
  const [activeAudioDialogueIndex, setActiveAudioDialogueIndex] = useState<number | null>(null);

  // Listening Test Form State
  const [listeningAnswers, setListeningAnswers] = useState<Record<string, string | number>>({});
  const [listeningSubmitted, setListeningSubmitted] = useState(false);
  const [listeningScore, setListeningScore] = useState<{ score: number; total: number } | null>(null);

  // Reading Test Form State
  const [readingAnswers, setReadingAnswers] = useState<Record<string, number>>({});
  const [readingSubmitted, setReadingSubmitted] = useState(false);
  const [readingScore, setReadingScore] = useState<{ score: number; total: number } | null>(null);
  const [readingTimerSeconds, setReadingTimerSeconds] = useState(0);
  const [isReadingTimerActive, setIsReadingTimerActive] = useState(false);

  // Writing Test Form State
  const [writtenText, setWrittenText] = useState('');
  const [writingSubmitted, setWritingSubmitted] = useState(false);
  const [writingEvaluation, setWritingEvaluation] = useState<{
    totalScore: number;
    wordCount: number;
    rubricScores: Record<string, number>;
    feedback: string[];
    matchedKeywords: string[];
    grammarTips: string[];
  } | null>(null);

  // Speaking Test Form State
  const [isRecording, setIsRecording] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [prepTimeRemaining, setPrepTimeRemaining] = useState<number | null>(null);
  const [speakingTimeRemaining, setSpeakingTimeRemaining] = useState<number | null>(null);
  const [speakingEvaluation, setSpeakingEvaluation] = useState<{
    accuracyPercentage: number;
    matchedWords: string[];
    missedWords: string[];
    score: number;
    feedback: string;
  } | null>(null);
  const [speechRecognitionSupported, setSpeechRecognitionSupported] = useState(true);

  const recognitionRef = useRef<any>(null);
  const timerRef = useRef<any>(null);

  // Stop audio and timers when switching tabs or tests
  useEffect(() => {
    stopSpeech();
    setIsPlayingAudio(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [activeSkill, activeListeningTest, activeReadingTest, activeWritingTest, activeSpeakingTest]);

  // Reading Timer
  useEffect(() => {
    let interval: any = null;
    if (isReadingTimerActive) {
      interval = setInterval(() => {
        setReadingTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isReadingTimerActive]);

  // Speech Recognition Setup
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setSpeechRecognitionSupported(false);
      }
    }
  }, []);

  // ----------------------------------------------------
  // LISTENING HANDLERS
  // ----------------------------------------------------
  const handleStartListeningTest = (test: ListeningTest) => {
    setActiveListeningTest(test);
    setListeningAnswers({});
    setListeningSubmitted(false);
    setListeningScore(null);
    setShowTranscript(false);
    setActiveAudioDialogueIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayFullListeningAudio = () => {
    if (!activeListeningTest) return;
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      speakSentence(activeListeningTest.audioScript, playbackSpeed);
      // Rough timer to revert state
      const words = activeListeningTest.audioScript.split(' ').length;
      const duration = Math.max(3000, (words / (2.2 * playbackSpeed)) * 1000);
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, duration);
    }
  };

  const handlePlayDialogueLine = (index: number, text: string) => {
    setActiveAudioDialogueIndex(index);
    stopSpeech();
    speakSentence(text, playbackSpeed);
    const words = text.split(' ').length;
    const duration = Math.max(2000, (words / (2.2 * playbackSpeed)) * 1000);
    setTimeout(() => {
      setActiveAudioDialogueIndex(null);
    }, duration);
  };

  const handleSubmitListening = () => {
    if (!activeListeningTest) return;
    let earned = 0;
    const total = activeListeningTest.questions.length;

    activeListeningTest.questions.forEach((q) => {
      const ans = listeningAnswers[q.id];
      if (q.type === 'multiple_choice') {
        if (ans === q.correctAnswer) earned += 1;
      } else {
        // String check for dictation
        const strAns = String(ans || '').trim().toLowerCase();
        const expected = String(q.correctAnswer).trim().toLowerCase();
        if (strAns === expected || expected.includes(strAns) && strAns.length > 3) {
          earned += 1;
        }
      }
    });

    const percentage = Math.round((earned / total) * 100);
    setListeningScore({ score: earned, total });
    setListeningSubmitted(true);
    setShowTranscript(true);

    onSaveSkillScore('listening', activeListeningTest.id, earned, total, percentage);

    if (percentage >= 70) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
  };

  // ----------------------------------------------------
  // READING HANDLERS
  // ----------------------------------------------------
  const handleStartReadingTest = (test: ReadingTest) => {
    setActiveReadingTest(test);
    setReadingAnswers({});
    setReadingSubmitted(false);
    setReadingScore(null);
    setReadingTimerSeconds(0);
    setIsReadingTimerActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitReading = () => {
    if (!activeReadingTest) return;
    setIsReadingTimerActive(false);
    let earned = 0;
    const total = activeReadingTest.questions.length;

    activeReadingTest.questions.forEach((q) => {
      if (readingAnswers[q.id] === q.correctIndex) {
        earned += 1;
      }
    });

    const percentage = Math.round((earned / total) * 100);
    setReadingScore({ score: earned, total });
    setReadingSubmitted(true);

    onSaveSkillScore('reading', activeReadingTest.id, earned, total, percentage);

    if (percentage >= 70) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
  };

  // ----------------------------------------------------
  // WRITING HANDLERS & INTELLIGENT RUBRIC EVALUATOR
  // ----------------------------------------------------
  const handleStartWritingTest = (test: WritingTest) => {
    setActiveWritingTest(test);
    setWrittenText(test.starterTemplate || '');
    setWritingSubmitted(false);
    setWritingEvaluation(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const evaluateWritingSubmission = () => {
    if (!activeWritingTest) return;
    const text = writtenText.trim();
    const words = text.length > 0 ? text.split(/\s+/).filter(Boolean) : [];
    const wordCount = words.length;

    // 1. Length & Task Achievement (Max 25 pts)
    let taskScore = 0;
    if (wordCount >= activeWritingTest.minWords && wordCount <= activeWritingTest.maxWords + 40) {
      taskScore = 25;
    } else if (wordCount >= activeWritingTest.minWords * 0.7) {
      taskScore = 18;
    } else if (wordCount > 10) {
      taskScore = 12;
    } else {
      taskScore = 5;
    }

    // 2. Connector & Transition usage (Max 25 pts)
    const connectorsToCheck = activeWritingTest.keyConnectorsToUse || ['however', 'furthermore', 'therefore', 'consequently', 'although', 'in addition', 'while'];
    const matchedConnectors = connectorsToCheck.filter((conn) =>
      text.toLowerCase().includes(conn.toLowerCase())
    );
    const cohesionScore = Math.min(25, 10 + matchedConnectors.length * 5);

    // 3. Grammar points & variety (Max 25 pts)
    let grammarScore = 20;
    const commonMistakes = ['i am agree', 'he didn\'t brought', 'more cheaper', 'must to', 'informations', 'advices'];
    const foundMistakes = commonMistakes.filter((mistake) =>
      text.toLowerCase().includes(mistake)
    );
    grammarScore = Math.max(8, grammarScore - foundMistakes.length * 6);

    // 4. Vocabulary sophistication (Max 25 pts)
    const avgWordLength = words.reduce((acc, w) => acc + w.length, 0) / (wordCount || 1);
    let vocabScore = 20;
    if (avgWordLength > 5.0) vocabScore = 25;
    else if (avgWordLength < 4.0) vocabScore = 15;

    const totalScore = taskScore + cohesionScore + grammarScore + vocabScore;

    const feedback: string[] = [];
    if (wordCount < activeWritingTest.minWords) {
      feedback.push(`Word count (${wordCount} words) is below the recommended minimum of ${activeWritingTest.minWords} words. Expand your supporting explanations.`);
    } else if (wordCount > activeWritingTest.maxWords + 30) {
      feedback.push(`Word count (${wordCount} words) exceeds the target range. Practice concise executive phrasing.`);
    } else {
      feedback.push(`Excellent word count balance (${wordCount} words) meeting all test parameters.`);
    }

    if (matchedConnectors.length > 0) {
      feedback.push(`Strong transitional cohesion with effective use of: ${matchedConnectors.join(', ')}.`);
    } else {
      feedback.push(`Consider incorporating more formal transitional connectors (e.g. "Furthermore", "Consequently", "However") to strengthen flow.`);
    }

    if (foundMistakes.length > 0) {
      feedback.push(`Grammar watch: Detected possible phrasing issues with: "${foundMistakes.join(', ')}".`);
    }

    setWritingEvaluation({
      totalScore,
      wordCount,
      rubricScores: {
        'Task Achievement': taskScore,
        'Cohesion & Connectors': cohesionScore,
        'Grammar & Accuracy': grammarScore,
        'Lexical Vocabulary': vocabScore
      },
      feedback,
      matchedKeywords: matchedConnectors,
      grammarTips: activeWritingTest.targetGrammarPoints
    });

    setWritingSubmitted(true);
    onSaveSkillScore('writing', activeWritingTest.id, totalScore, 100, totalScore);

    if (totalScore >= 70) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
  };

  // ----------------------------------------------------
  // SPEAKING HANDLERS & SPEECH RECOGNITION
  // ----------------------------------------------------
  const handleStartSpeakingTest = (test: SpeakingTest) => {
    setActiveSpeakingTest(test);
    setSpokenTranscript('');
    setSpeakingEvaluation(null);
    setPrepTimeRemaining(test.prepTimeSeconds);
    setSpeakingTimeRemaining(test.speakingTimeSeconds);
    setIsRecording(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Start prep countdown
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPrepTimeRemaining((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStartRecording = () => {
    if (prepTimeRemaining && prepTimeRemaining > 0) {
      clearInterval(timerRef.current);
      setPrepTimeRemaining(0);
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported in this browser. You can still test with model native audio and text verification.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript + ' ';
        }
        setSpokenTranscript(transcript.trim());
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
      recognitionRef.current = recognition;
      setIsRecording(true);

      // Start speaking countdown
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setSpeakingTimeRemaining((prev) => {
          if (prev === null || prev <= 1) {
            handleStopRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      console.warn('Error starting recognition:', err);
      setIsRecording(false);
    }
  };

  const handleStopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRecording(false);
  };

  const handleEvaluateSpeaking = () => {
    if (!activeSpeakingTest) return;
    const spoken = spokenTranscript.trim().toLowerCase();
    const spokenWords = spoken.split(/\s+/).filter(Boolean);

    // Target comparison
    const targetText = activeSpeakingTest.targetSentence || activeSpeakingTest.modelSpokenAudioText;
    const targetClean = targetText.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    const targetWords = targetClean.split(/\s+/).filter(Boolean);

    const matched: string[] = [];
    const missed: string[] = [];

    targetWords.forEach((word) => {
      if (spoken.includes(word)) {
        matched.push(word);
      } else {
        missed.push(word);
      }
    });

    const accuracy = targetWords.length > 0
      ? Math.round((matched.length / targetWords.length) * 100)
      : Math.min(100, spokenWords.length * 5);

    const calculatedScore = Math.max(10, Math.min(100, Math.round(accuracy * 0.7 + (spokenWords.length >= 8 ? 30 : spokenWords.length * 3.5))));

    let feedback = '';
    if (accuracy >= 85) {
      feedback = 'Outstanding pronunciation clarity and cadence! Your word accuracy and rhythm matched native standard articulation.';
    } else if (accuracy >= 65) {
      feedback = 'Solid spoken response with clear communication. Focus on fully pronouncing multi-syllable endings and past-tense suffixes.';
    } else {
      feedback = 'Good attempt. Practice reading the sentence alongside the model audio at 0.75x speed to sharpen consonant cluster clarity.';
    }

    setSpeakingEvaluation({
      accuracyPercentage: accuracy,
      matchedWords: matched,
      missedWords: missed,
      score: calculatedScore,
      feedback
    });

    onSaveSkillScore('speaking', activeSpeakingTest.id, calculatedScore, 100, calculatedScore);

    if (calculatedScore >= 70) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
  };

  // Helper for filtered tests
  const filteredListening = LISTENING_TESTS.filter(
    (t) => levelFilter === 'All' || t.level === levelFilter
  );
  const filteredReading = READING_TESTS.filter(
    (t) => levelFilter === 'All' || t.level === levelFilter
  );
  const filteredWriting = WRITING_TESTS.filter(
    (t) => levelFilter === 'All' || t.level === levelFilter
  );
  const filteredSpeaking = SPEAKING_TESTS.filter(
    (t) => levelFilter === 'All' || t.level === levelFilter
  );

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 py-2 sm:py-4 space-y-6">
      {/* 1. Master Header Banner */}
      <div className="rounded-3xl border border-indigo-200/80 bg-white p-5 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-1 text-xs font-bold text-white shadow-2xs">
              <Award size={14} className="text-amber-300" />
              <span>4-Skills Practice Test Studio • Listening, Reading, Writing & Speaking</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif italic font-black text-gray-900 tracking-tight">
              Four Core Language Skills Center
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
              Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-indigo-700 underline hover:text-indigo-900">Ms. Maria</a>. Enhance your English proficiency through authentic multimedia practice tests: audio comprehension with speed controls, timed reading passages, live writing evaluations with rubric feedback, and microphone speech evaluation.
            </p>
          </div>

          {/* Quick stats pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center shadow-2xs">
              <div className="flex items-center justify-center gap-1 text-emerald-900 font-bold text-xs">
                <Headphones size={14} className="text-emerald-600" />
                <span>Listening</span>
              </div>
              <div className="text-lg font-serif font-bold text-emerald-950 mt-0.5">
                {LISTENING_TESTS.length} Tests
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-200 text-center shadow-2xs">
              <div className="flex items-center justify-center gap-1 text-sky-900 font-bold text-xs">
                <BookOpen size={14} className="text-sky-600" />
                <span>Reading</span>
              </div>
              <div className="text-lg font-serif font-bold text-sky-950 mt-0.5">
                {READING_TESTS.length} Tests
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-center shadow-2xs">
              <div className="flex items-center justify-center gap-1 text-amber-900 font-bold text-xs">
                <PenTool size={14} className="text-amber-600" />
                <span>Writing</span>
              </div>
              <div className="text-lg font-serif font-bold text-amber-950 mt-0.5">
                {WRITING_TESTS.length} Tests
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-200 text-center shadow-2xs">
              <div className="flex items-center justify-center gap-1 text-purple-900 font-bold text-xs">
                <Mic size={14} className="text-purple-600" />
                <span>Speaking</span>
              </div>
              <div className="text-lg font-serif font-bold text-purple-950 mt-0.5">
                {SPEAKING_TESTS.length} Tests
              </div>
            </div>
          </div>
        </div>

        {/* Four-Skill Tab Switcher */}
        <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
            <button
              id="tab-skill-listening"
              type="button"
              onClick={() => {
                setActiveSkill('listening');
                setActiveListeningTest(null);
                setActiveReadingTest(null);
                setActiveWritingTest(null);
                setActiveSpeakingTest(null);
              }}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-2xs ${
                activeSkill === 'listening'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs scale-105'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 border border-gray-200'
              }`}
            >
              <Headphones size={16} />
              <span>1. Listening</span>
            </button>

            <button
              id="tab-skill-reading"
              type="button"
              onClick={() => {
                setActiveSkill('reading');
                setActiveListeningTest(null);
                setActiveReadingTest(null);
                setActiveWritingTest(null);
                setActiveSpeakingTest(null);
              }}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-2xs ${
                activeSkill === 'reading'
                  ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-xs scale-105'
                  : 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-900 border border-gray-200'
              }`}
            >
              <BookOpen size={16} />
              <span>2. Reading</span>
            </button>

            <button
              id="tab-skill-writing"
              type="button"
              onClick={() => {
                setActiveSkill('writing');
                setActiveListeningTest(null);
                setActiveReadingTest(null);
                setActiveWritingTest(null);
                setActiveSpeakingTest(null);
              }}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-2xs ${
                activeSkill === 'writing'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-900 border border-gray-200'
              }`}
            >
              <PenTool size={16} />
              <span>3. Writing</span>
            </button>

            <button
              id="tab-skill-speaking"
              type="button"
              onClick={() => {
                setActiveSkill('speaking');
                setActiveListeningTest(null);
                setActiveReadingTest(null);
                setActiveWritingTest(null);
                setActiveSpeakingTest(null);
              }}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-2xs ${
                activeSkill === 'speaking'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xs scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-900 border border-gray-200'
              }`}
            >
              <Mic size={16} />
              <span>4. Speaking</span>
            </button>
          </div>

          {/* Difficulty Level Filter */}
          <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-2xl border border-gray-200 text-xs self-end shadow-2xs">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                className={`px-3 py-1 rounded-xl font-bold transition-all ${
                  levelFilter === lvl
                    ? 'bg-gray-900 text-white shadow-2xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. ACTIVE TEST RUNNER MODES OR CATALOG GRID */}
      {/* ========================================================================= */}

      {/* ----------------- 2A. ACTIVE LISTENING TEST RUNNER ----------------- */}
      {activeListeningTest && (
        <div className="rounded-3xl border border-[#1A1A1A]/15 bg-white p-5 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-200">
          {/* Header & Back Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  stopSpeech();
                  setActiveListeningTest(null);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#1A1A1A]/15 bg-[#F7F5F0] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
              >
                <ArrowLeft size={16} />
              </button>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A5D4E] flex items-center gap-1">
                  <Headphones size={12} />
                  Listening Practice Test • {activeListeningTest.level}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-[#1A1A1A]">
                  {activeListeningTest.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/60 font-sans">
              <Clock size={14} />
              <span>Est. {activeListeningTest.durationMinutes} mins</span>
              <span>•</span>
              <span className="capitalize">{activeListeningTest.category} domain</span>
            </div>
          </div>

          {/* Context box */}
          <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10 text-xs sm:text-sm text-[#1A1A1A]/80 font-sans">
            <strong className="text-[#1A1A1A]">Scenario Context:</strong> {activeListeningTest.context}
          </div>

          {/* Audio Player Control Center */}
          <div className="rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  id="btn-play-listening-full"
                  type="button"
                  onClick={handlePlayFullListeningAudio}
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 ${
                    isPlayingAudio ? 'bg-[#C25E3E] animate-pulse' : 'bg-white text-[#1A1A1A]'
                  }`}
                >
                  {isPlayingAudio ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-[#1A1A1A] ml-0.5" />}
                </button>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{isPlayingAudio ? 'Playing Audio Recording...' : 'Click to Listen to Full Audio'}</span>
                    {isPlayingAudio && <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />}
                  </div>
                  <p className="text-[11px] text-white/60">
                    Natural English Articulation • Ms. Maria Curriculum Audio
                  </p>
                </div>
              </div>

              {/* Speed Controller & Transcript Toggle */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-white/10 rounded-xl p-1 text-xs">
                  <span className="text-[10px] uppercase font-bold text-white/60 px-1.5">Speed:</span>
                  {[0.75, 0.9, 1.0, 1.25].map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => setPlaybackSpeed(spd)}
                      className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-colors ${
                        playbackSpeed === spd
                          ? 'bg-white text-[#1A1A1A]'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  {showTranscript ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>{showTranscript ? 'Hide Transcript' : 'Show Transcript'}</span>
                </button>
              </div>
            </div>

            {/* Transcript (Hidden by default during testing, revealed on toggle or after submitting) */}
            {showTranscript && (
              <div className="mt-4 pt-4 border-t border-white/15 space-y-3 animate-in fade-in">
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Audio Script & Dialogue Breakdown:
                </div>
                {activeListeningTest.dialogue ? (
                  <div className="space-y-2">
                    {activeListeningTest.dialogue.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl bg-white/10 flex items-start gap-3 transition-colors ${
                          activeAudioDialogueIndex === idx ? 'ring-2 ring-emerald-400 bg-white/20' : ''
                        }`}
                      >
                        <span className="text-lg">{item.avatar}</span>
                        <div className="flex-1 text-xs sm:text-sm text-white/90">
                          <strong className="text-white font-bold block text-xs">{item.speaker}</strong>
                          {item.text}
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePlayDialogueLine(idx, item.text)}
                          title="Listen to this line"
                          className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/30 transition-colors shrink-0"
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm text-white/80 italic font-serif leading-relaxed">
                    "{activeListeningTest.audioScript}"
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Vocabulary Bank */}
          <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60 flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#C25E3E]" />
              Target Vocabulary & Key Terms
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeListeningTest.vocabulary.map((vocab, vIdx) => (
                <div key={vIdx} className="p-2.5 rounded-xl bg-white border border-[#1A1A1A]/10">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#1A1A1A]">{vocab.word}</span>
                    <button
                      type="button"
                      onClick={() => speakSentence(vocab.word, 0.85)}
                      className="text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                  <p className="text-[11px] text-[#1A1A1A]/70 mt-1 leading-tight">{vocab.definition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Test Questions Section */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-serif italic font-bold text-[#1A1A1A]">
                Comprehension & Dictation Questions ({activeListeningTest.questions.length})
              </h3>
              {listeningSubmitted && listeningScore && (
                <div className="px-3 py-1 rounded-full bg-[#1A1A1A] text-white text-xs font-bold">
                  Score: {listeningScore.score} / {listeningScore.total} (
                  {Math.round((listeningScore.score / listeningScore.total) * 100)}%)
                </div>
              )}
            </div>

            <div className="space-y-4">
              {activeListeningTest.questions.map((q, qIndex) => {
                const isDictation = q.type === 'dictation';
                const userAns = listeningAnswers[q.id];
                const isCorrect = isDictation
                  ? String(userAns || '').trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()
                  : userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      listeningSubmitted
                        ? isCorrect
                          ? 'border-emerald-500 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-[#1A1A1A]/10 bg-[#FDFCF9]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1A1A] text-white text-xs font-bold shrink-0">
                        {qIndex + 1}
                      </span>
                      <p className="flex-1 font-semibold text-xs sm:text-sm text-[#1A1A1A]">
                        {q.prompt}
                      </p>
                    </div>

                    {/* Multiple Choice Options */}
                    {!isDictation && q.options && (
                      <div className="space-y-2 ml-9">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAns === optIdx;
                          const isRightOption = q.correctAnswer === optIdx;

                          let btnClasses = 'border-[#1A1A1A]/10 bg-white text-[#1A1A1A] hover:bg-[#F7F5F0]';
                          if (listeningSubmitted) {
                            if (isRightOption) btnClasses = 'border-emerald-600 bg-emerald-100 text-emerald-900 font-bold';
                            else if (isSelected) btnClasses = 'border-rose-600 bg-rose-100 text-rose-900 line-through';
                            else btnClasses = 'border-transparent opacity-60 bg-white/50';
                          } else if (isSelected) {
                            btnClasses = 'border-[#1A1A1A] bg-[#1A1A1A] text-white font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={listeningSubmitted}
                              onClick={() => setListeningAnswers({ ...listeningAnswers, [q.id]: optIdx })}
                              className={`w-full p-2.5 rounded-xl border text-left text-xs sm:text-sm flex items-center justify-between transition-all ${btnClasses}`}
                            >
                              <span>{opt}</span>
                              {listeningSubmitted && isRightOption && <CheckCircle2 size={16} className="text-emerald-700 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Dictation Input */}
                    {isDictation && (
                      <div className="ml-9 space-y-2">
                        <input
                          type="text"
                          disabled={listeningSubmitted}
                          placeholder="Type the exact word you heard in the audio..."
                          value={String(userAns || '')}
                          onChange={(e) => setListeningAnswers({ ...listeningAnswers, [q.id]: e.target.value })}
                          className="w-full rounded-xl border border-[#1A1A1A]/20 bg-white px-3.5 py-2 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                        />
                        {listeningSubmitted && (
                          <div className="text-xs font-bold">
                            {isCorrect ? (
                              <span className="text-emerald-700 flex items-center gap-1">
                                <CheckCircle2 size={14} /> Correct word: "{q.correctAnswer}"
                              </span>
                            ) : (
                              <span className="text-rose-700 flex items-center gap-1">
                                <AlertTriangle size={14} /> Correct word is: "{q.correctAnswer}"
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Explanation if submitted */}
                    {listeningSubmitted && (
                      <div className="mt-3 ml-9 p-3 rounded-xl bg-white border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80 font-sans">
                        <strong className="text-[#1A1A1A]">Audio Explanation:</strong> {q.whyExplanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submission Button */}
            {!listeningSubmitted ? (
              <button
                id="btn-submit-listening"
                type="button"
                onClick={handleSubmitListening}
                className="w-full py-3 rounded-xl bg-[#1A1A1A] text-white font-bold text-sm hover:bg-[#333] transition-colors shadow-xs"
              >
                Submit Listening Practice Test & View Results
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10">
                <div>
                  <span className="text-xs font-bold text-[#1A1A1A] block">Test Completed!</span>
                  <span className="text-xs text-[#1A1A1A]/60 font-sans">
                    Score saved to your profile progress.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setListeningAnswers({});
                      setListeningSubmitted(false);
                      setListeningScore(null);
                      setShowTranscript(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#1A1A1A]/20 bg-white text-xs font-bold text-[#1A1A1A] hover:bg-[#F7F5F0]"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Test</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveListeningTest(null)}
                    className="px-4 py-1.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-[#333]"
                  >
                    Back to Test Catalog
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ----------------- 2B. ACTIVE READING TEST RUNNER ----------------- */}
      {activeReadingTest && (
        <div className="rounded-3xl border border-[#1A1A1A]/15 bg-white p-5 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveReadingTest(null)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#1A1A1A]/15 bg-[#F7F5F0] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
              >
                <ArrowLeft size={16} />
              </button>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#3E5C76] flex items-center gap-1">
                  <BookOpen size={12} />
                  Reading Comprehension Test • {activeReadingTest.level} • {activeReadingTest.genre}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-[#1A1A1A]">
                  {activeReadingTest.title}
                </h2>
              </div>
            </div>

            {/* Reading Timer & Metrics */}
            <div className="flex items-center gap-3 text-xs text-[#1A1A1A]/80 font-sans">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F5F0] border border-[#1A1A1A]/10 font-bold">
                <Clock size={14} className="text-[#3E5C76]" />
                <span>
                  {Math.floor(readingTimerSeconds / 60)}:
                  {String(readingTimerSeconds % 60).padStart(2, '0')}
                </span>
              </div>
              <span>{activeReadingTest.wordCount} Words</span>
            </div>
          </div>

          {/* Split Screen / Side-by-Side Reading Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Passage Column (Left 6-7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl bg-[#FDFCF9] border border-[#1A1A1A]/15 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]/10 text-xs">
                  <span className="font-bold uppercase tracking-widest text-[#1A1A1A]/60">
                    Reading Passage
                  </span>
                  <button
                    type="button"
                    onClick={() => speakSentence(activeReadingTest.passage, 0.9)}
                    className="flex items-center gap-1 text-[11px] font-bold text-[#1A1A1A] hover:underline"
                  >
                    <Volume2 size={14} />
                    <span>Read Aloud</span>
                  </button>
                </div>

                <div className="prose prose-sm font-serif text-sm sm:text-base text-[#1A1A1A]/90 leading-relaxed whitespace-pre-line">
                  {activeReadingTest.passage}
                </div>
              </div>

              {/* Glossary */}
              {activeReadingTest.glossary && (
                <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60">
                    Passage Glossary & Context Definitions
                  </h4>
                  <div className="space-y-1.5">
                    {activeReadingTest.glossary.map((g, gIdx) => (
                      <div key={gIdx} className="text-xs">
                        <strong className="text-[#1A1A1A] font-bold">{g.term}:</strong>{' '}
                        <span className="text-[#1A1A1A]/70 font-sans">{g.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Questions Column (Right 5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                  Comprehension Questions ({activeReadingTest.questions.length})
                </h3>
                {readingSubmitted && readingScore && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1A1A1A] text-white text-xs font-bold">
                    {readingScore.score} / {readingScore.total}
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {activeReadingTest.questions.map((q, qIndex) => {
                  const userAns = readingAnswers[q.id];
                  const isCorrect = userAns === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        readingSubmitted
                          ? isCorrect
                            ? 'border-emerald-500 bg-emerald-50/40'
                            : 'border-rose-300 bg-rose-50/40'
                          : 'border-[#1A1A1A]/10 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1A1A1A] text-white text-[10px] font-bold shrink-0">
                          {qIndex + 1}
                        </span>
                        <p className="font-semibold text-xs text-[#1A1A1A] leading-snug">
                          {q.prompt}
                        </p>
                      </div>

                      <div className="space-y-1.5 ml-7">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAns === optIdx;
                          const isRightOption = q.correctIndex === optIdx;

                          let btnClasses = 'border-[#1A1A1A]/10 bg-[#FDFCF9] text-[#1A1A1A] hover:bg-[#F7F5F0]';
                          if (readingSubmitted) {
                            if (isRightOption) btnClasses = 'border-emerald-600 bg-emerald-100 text-emerald-900 font-bold';
                            else if (isSelected) btnClasses = 'border-rose-600 bg-rose-100 text-rose-900 line-through';
                            else btnClasses = 'border-transparent opacity-50';
                          } else if (isSelected) {
                            btnClasses = 'border-[#1A1A1A] bg-[#1A1A1A] text-white font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={readingSubmitted}
                              onClick={() => setReadingAnswers({ ...readingAnswers, [q.id]: optIdx })}
                              className={`w-full p-2 rounded-xl border text-left text-xs flex items-center justify-between transition-all ${btnClasses}`}
                            >
                              <span>{opt}</span>
                              {readingSubmitted && isRightOption && <Check size={14} className="text-emerald-700" />}
                            </button>
                          );
                        })}
                      </div>

                      {readingSubmitted && (
                        <div className="mt-2.5 ml-7 p-2.5 rounded-xl bg-white border border-[#1A1A1A]/10 text-[11px] text-[#1A1A1A]/80">
                          <strong className="text-[#1A1A1A]">Explanation:</strong> {q.whyExplanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Reading */}
              {!readingSubmitted ? (
                <button
                  id="btn-submit-reading"
                  type="button"
                  onClick={handleSubmitReading}
                  className="w-full py-3 rounded-xl bg-[#1A1A1A] text-white font-bold text-xs sm:text-sm hover:bg-[#333] transition-colors"
                >
                  Submit Reading Test & Calculate Score
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#1A1A1A]/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1A1A1A]">Reading Completed</span>
                  <button
                    type="button"
                    onClick={() => setActiveReadingTest(null)}
                    className="px-3 py-1 rounded-lg bg-[#1A1A1A] text-white text-xs font-bold"
                  >
                    Back to Catalog
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ----------------- 2C. ACTIVE WRITING TEST RUNNER ----------------- */}
      {activeWritingTest && (
        <div className="rounded-3xl border border-[#1A1A1A]/15 bg-white p-5 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveWritingTest(null)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#1A1A1A]/15 bg-[#F7F5F0] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
              >
                <ArrowLeft size={16} />
              </button>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C25E3E] flex items-center gap-1">
                  <PenTool size={12} />
                  Writing Practice & Rubric Assessment • {activeWritingTest.level}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-[#1A1A1A]">
                  {activeWritingTest.title}
                </h2>
              </div>
            </div>

            <div className="text-xs text-[#1A1A1A]/70 font-sans">
              <span>Target: {activeWritingTest.minWords} – {activeWritingTest.maxWords} Words</span>
            </div>
          </div>

          {/* Prompt & Instructions */}
          <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60">
              Writing Prompt & Task Directives:
            </div>
            <p className="font-serif text-sm sm:text-base font-bold text-[#1A1A1A] leading-relaxed">
              {activeWritingTest.prompt}
            </p>
            <div className="space-y-1 pt-1">
              {activeWritingTest.instructions.map((inst, iIdx) => (
                <div key={iIdx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80">
                  <span className="font-bold text-[#1A1A1A]">•</span>
                  <span>{inst}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Grammar & Connectors Guide */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white border border-[#1A1A1A]/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/60 block mb-1">
                Target Grammar Structures:
              </span>
              <ul className="text-xs space-y-1 text-[#1A1A1A]/80">
                {activeWritingTest.targetGrammarPoints.map((gp, gIdx) => (
                  <li key={gIdx} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-[#4A5D4E]" />
                    <span>{gp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeWritingTest.keyConnectorsToUse && (
              <div className="p-3 rounded-xl bg-white border border-[#1A1A1A]/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/60 block mb-1">
                  Recommended Transitional Connectors:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeWritingTest.keyConnectorsToUse.map((conn, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-0.5 rounded-md bg-[#F7F5F0] border border-[#1A1A1A]/10 text-xs font-mono font-medium text-[#1A1A1A]"
                    >
                      {conn}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Writing Area */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center justify-between text-xs gap-2">
              <label className="font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                <PenTool size={14} className="text-amber-600" />
                <span>Interactive Writing Space:</span>
              </label>
              <div className="flex items-center gap-3 font-mono text-xs">
                {activeWritingTest.starterTemplate && !writingSubmitted && (
                  <button
                    type="button"
                    onClick={() => setWrittenText(activeWritingTest.starterTemplate || '')}
                    className="text-indigo-600 hover:text-indigo-800 font-sans font-bold underline"
                  >
                    Insert Template
                  </button>
                )}
                {!writingSubmitted && writtenText.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setWrittenText('')}
                    className="text-rose-600 hover:text-rose-800 font-sans font-bold underline"
                  >
                    Clear Space
                  </button>
                )}
                <span
                  className={
                    writtenText.trim().split(/\s+/).filter(Boolean).length < activeWritingTest.minWords
                      ? 'text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200'
                      : 'text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200'
                  }
                >
                  {writtenText.trim().length === 0 ? 0 : writtenText.trim().split(/\s+/).filter(Boolean).length} / {activeWritingTest.minWords}–{activeWritingTest.maxWords} Words
                </span>
                <span className="text-gray-400">({writtenText.length} chars)</span>
              </div>
            </div>

            <textarea
              id="textarea-writing-response"
              rows={8}
              value={writtenText}
              onChange={(e) => setWrittenText(e.target.value)}
              placeholder="Type your response here... (Press spacebar or enter naturally to structure your sentences)"
              disabled={writingSubmitted}
              className={`w-full rounded-2xl border bg-white p-4 text-xs sm:text-sm text-gray-900 font-sans leading-relaxed transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                writingSubmitted ? 'bg-gray-50/70 border-gray-200 opacity-90' : 'border-amber-200'
              }`}
            />
          </div>

          {/* Evaluation Action */}
          {!writingSubmitted ? (
            <button
              id="btn-evaluate-writing"
              type="button"
              onClick={evaluateWritingSubmission}
              disabled={writtenText.trim().length < 5}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-xs sm:text-sm hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:scale-[1.01] disabled:opacity-40 disabled:hover:scale-100"
            >
              Submit & Run Automated Rubric Assessment
            </button>
          ) : (
            /* Diagnostic Rubric Scorecard & Model Answer Comparison */
            writingEvaluation && (
              <div className="space-y-6 pt-4 border-t border-gray-100 animate-in fade-in">
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-white space-y-4 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">
                        Rubric Assessment Results
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif italic font-bold">
                        Total Writing Score: {writingEvaluation.totalScore} / 100
                      </h3>
                    </div>
                    <div className="px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold w-fit">
                      {writingEvaluation.totalScore >= 80 ? '🌟 Proficient (Band A)' : '📈 Developing (Band B)'}
                    </div>
                  </div>

                  {/* Rubric criteria breakdown */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-white/10">
                    {Object.entries(writingEvaluation.rubricScores).map(([crit, score]) => (
                      <div key={crit} className="p-3 rounded-2xl bg-white/10 shadow-2xs">
                        <span className="text-[10px] text-white/70 block leading-tight">{crit}</span>
                        <span className="text-base font-bold text-white">{score} / 25</span>
                      </div>
                    ))}
                  </div>

                  {/* Feedback points */}
                  <div className="space-y-1.5 pt-2">
                    {writingEvaluation.feedback.map((fb, fbIdx) => (
                      <div key={fbIdx} className="text-xs text-white/90 flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{fb}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Model Answer Side-by-Side Comparison */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-amber-50/60 to-white border border-amber-200 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-amber-900 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-amber-600" />
                      Ms. Maria Official Exemplary Model Answer
                    </h4>
                    <button
                      type="button"
                      onClick={() => speakSentence(activeWritingTest.sampleModelAnswer, 0.9)}
                      className="flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 bg-amber-100/80 px-3 py-1 rounded-full"
                    >
                      <Volume2 size={14} />
                      <span>Listen to Model</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-amber-100 font-serif italic text-xs sm:text-sm text-gray-800 leading-relaxed whitespace-pre-line shadow-2xs">
                    {activeWritingTest.sampleModelAnswer}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => {
                      setWritingSubmitted(false);
                      setWritingEvaluation(null);
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-white border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider hover:bg-amber-50 transition-colors shadow-2xs"
                  >
                    ✏️ Revise & Edit My Response
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveWritingTest(null)}
                    className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-gray-900 to-indigo-950 text-white text-xs font-bold uppercase tracking-wider hover:from-indigo-900 hover:to-purple-900 transition-colors shadow-2xs"
                  >
                    Back to Writing Catalog
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}

      {/* ----------------- 2D. ACTIVE SPEAKING TEST RUNNER ----------------- */}
      {activeSpeakingTest && (
        <div className="rounded-3xl border border-[#1A1A1A]/15 bg-white p-5 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  handleStopRecording();
                  setActiveSpeakingTest(null);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#1A1A1A]/15 bg-[#F7F5F0] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
              >
                <ArrowLeft size={16} />
              </button>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B4B94] flex items-center gap-1">
                  <Mic size={12} />
                  Speaking & Pronunciation Test • {activeSpeakingTest.level}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-[#1A1A1A]">
                  {activeSpeakingTest.title}
                </h2>
              </div>
            </div>

            {/* Prep and Speaking Timers */}
            <div className="flex items-center gap-2 text-xs font-mono">
              {prepTimeRemaining !== null && prepTimeRemaining > 0 && (
                <div className="px-3 py-1 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 font-bold flex items-center gap-1">
                  <Clock size={13} />
                  <span>Prep: {prepTimeRemaining}s</span>
                </div>
              )}
              {speakingTimeRemaining !== null && (
                <div className="px-3 py-1 rounded-xl bg-[#F7F5F0] border border-[#1A1A1A]/15 text-[#1A1A1A] font-bold flex items-center gap-1">
                  <Mic size={13} className={isRecording ? 'text-rose-600 animate-pulse' : ''} />
                  <span>Time: {speakingTimeRemaining}s</span>
                </div>
              )}
            </div>
          </div>

          {/* Prompt & Target Sentence */}
          <div className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60">
              Task Prompt:
            </div>
            <p className="font-serif text-sm sm:text-base font-bold text-[#1A1A1A]">
              {activeSpeakingTest.prompt}
            </p>

            {activeSpeakingTest.targetSentence && (
              <div className="p-3.5 rounded-xl bg-white border border-[#1A1A1A]/15 font-serif italic text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
                "{activeSpeakingTest.targetSentence}"
              </div>
            )}

            {activeSpeakingTest.imageOrGraphicDescription && (
              <div className="p-3 rounded-xl bg-white/70 border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80 font-sans">
                <strong className="text-[#1A1A1A]">Visual Scenario:</strong> {activeSpeakingTest.imageOrGraphicDescription}
              </div>
            )}
          </div>

          {/* Pronunciation Focus & Coaching Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white border border-[#1A1A1A]/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B4B94] block mb-1">
                Pronunciation Focus:
              </span>
              <ul className="text-xs space-y-1 text-[#1A1A1A]/80">
                {activeSpeakingTest.pronunciationFocus.map((pf, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5">
                    <span className="text-[#7B4B94] font-bold">•</span>
                    <span>{pf}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#1A1A1A]/10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">
                  Model Native Audio:
                </span>
                <button
                  type="button"
                  onClick={() => speakSentence(activeSpeakingTest.modelSpokenAudioText, 0.85)}
                  className="flex items-center gap-1 text-[11px] font-bold text-[#1A1A1A] hover:underline"
                >
                  <Volume2 size={13} />
                  <span>Listen to Ms. Maria</span>
                </button>
              </div>
              <p className="text-[11px] text-[#1A1A1A]/70 italic leading-relaxed">
                "{activeSpeakingTest.modelSpokenAudioText.slice(0, 100)}..."
              </p>
            </div>
          </div>

          {/* Live Recording Studio Controls */}
          <div className="p-6 rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative">
              <button
                id="btn-speaking-mic"
                type="button"
                onClick={isRecording ? handleStopRecording : handleStartRecording}
                className={`h-20 w-20 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 active:scale-95 ${
                  isRecording
                    ? 'bg-rose-600 text-white animate-pulse ring-8 ring-rose-500/30'
                    : 'bg-white text-[#1A1A1A]'
                }`}
              >
                {isRecording ? <MicOff size={32} /> : <Mic size={32} />}
              </button>
            </div>

            <div>
              <div className="text-sm font-bold text-white">
                {isRecording ? 'Listening & Transcribing... Speak clearly into your microphone' : 'Click the Microphone to Start Recording'}
              </div>
              <p className="text-xs text-white/60 mt-0.5">
                {speechRecognitionSupported
                  ? 'Real-time Web Speech AI transcription active'
                  : 'Speech recognition not active on this browser; text simulation ready'}
              </p>
            </div>

            {/* Live Speech Waveform Bar */}
            {isRecording && (
              <div className="flex items-center gap-1 h-6">
                {[40, 70, 100, 50, 90, 60, 80, 40, 70, 100, 60, 40].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-emerald-400 rounded-full animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Live Transcribed Speech Output */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold text-[#1A1A1A] uppercase tracking-wider">
                Recognized Spoken Transcript:
              </label>
              <span className="text-[#1A1A1A]/50">
                {spokenTranscript ? `${spokenTranscript.split(/\s+/).length} words recorded` : 'Waiting for voice input...'}
              </span>
            </div>

            <div className="min-h-[90px] p-4 rounded-2xl border border-[#1A1A1A]/20 bg-[#FDFCF9] text-xs sm:text-sm text-[#1A1A1A] font-sans leading-relaxed">
              {spokenTranscript ? (
                spokenTranscript
              ) : (
                <span className="text-[#1A1A1A]/40 italic">
                  Your spoken words will transcribe here in real-time as you speak...
                </span>
              )}
            </div>
          </div>

          {/* Action to Evaluate Speaking */}
          {!speakingEvaluation ? (
            <button
              id="btn-evaluate-speaking"
              type="button"
              disabled={!spokenTranscript.trim()}
              onClick={handleEvaluateSpeaking}
              className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors ${
                spokenTranscript.trim()
                  ? 'bg-[#1A1A1A] text-white hover:bg-[#333]'
                  : 'bg-[#F7F5F0] text-[#1A1A1A]/30 cursor-not-allowed'
              }`}
            >
              Analyze Pronunciation & Calculate Accuracy Score
            </button>
          ) : (
            /* Speaking Evaluation Scorecard */
            <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10 animate-in fade-in">
              <div className="p-5 rounded-2xl bg-[#1A1A1A] text-white space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">
                      Speaking Pronunciation Result
                    </span>
                    <h3 className="text-xl font-serif italic font-bold">
                      Pronunciation Match: {speakingEvaluation.accuracyPercentage}%
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
                    Score: {speakingEvaluation.score} / 100
                  </div>
                </div>

                <p className="text-xs text-white/90 leading-relaxed">
                  {speakingEvaluation.feedback}
                </p>

                {/* Word breakdown */}
                <div className="pt-2 border-t border-white/10 text-xs space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-white/60 block">
                    Accurately Pronounced Words ({speakingEvaluation.matchedWords.length}):
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {speakingEvaluation.matchedWords.map((w, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px]">
                        ✓ {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSpokenTranscript('');
                    setSpeakingEvaluation(null);
                    setPrepTimeRemaining(activeSpeakingTest.prepTimeSeconds);
                    setSpeakingTimeRemaining(activeSpeakingTest.speakingTimeSeconds);
                  }}
                  className="px-4 py-2 rounded-xl border border-[#1A1A1A]/20 bg-white text-xs font-bold text-[#1A1A1A]"
                >
                  Retake Speaking Task
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSpeakingTest(null)}
                  className="px-5 py-2 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold"
                >
                  Back to Speaking Catalog
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. CATALOG LIST VIEWS (When no active test is open) */}
      {/* ========================================================================= */}

      {!activeListeningTest && !activeReadingTest && !activeWritingTest && !activeSpeakingTest && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-serif italic font-bold text-[#1A1A1A]">
              Available {activeSkill.charAt(0).toUpperCase() + activeSkill.slice(1)} Tests (
              {activeSkill === 'listening'
                ? filteredListening.length
                : activeSkill === 'reading'
                ? filteredReading.length
                : activeSkill === 'writing'
                ? filteredWriting.length
                : filteredSpeaking.length}
              )
            </h2>
            <span className="text-xs text-[#1A1A1A]/60 font-sans">
              Filter: {levelFilter} Level
            </span>
          </div>

          {/* LISTENING CATALOG */}
          {activeSkill === 'listening' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredListening.map((test) => {
                const testKey = `listening_${test.id}`;
                const savedScore = progress.skillsScores?.[testKey];

                return (
                  <div
                    key={test.id}
                    className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 hover:border-[#1A1A1A]/30 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 font-bold text-[10px] text-[#4A5D4E] uppercase">
                          {test.level}
                        </span>
                        <span className="text-[#1A1A1A]/50 text-[11px] flex items-center gap-1">
                          <Clock size={12} /> {test.durationMinutes} mins
                        </span>
                      </div>

                      <h3 className="font-serif italic font-bold text-base text-[#1A1A1A] leading-snug">
                        {test.title}
                      </h3>

                      <p className="text-xs text-[#1A1A1A]/70 font-sans line-clamp-2">
                        {test.context}
                      </p>

                      <div className="flex items-center gap-2 text-[11px] text-[#1A1A1A]/60 pt-1">
                        <span className="capitalize font-medium">Domain: {test.category}</span>
                        <span>•</span>
                        <span>{test.questions.length} Questions</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                      {savedScore ? (
                        <div className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 size={14} />
                          <span>Passed: {savedScore.percentage}%</span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-[#1A1A1A]/50">Not yet attempted</span>
                      )}

                      <button
                        type="button"
                        onClick={() => handleStartListeningTest(test)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-[#333] transition-colors flex items-center gap-1"
                      >
                        <span>Start Test</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* READING CATALOG */}
          {activeSkill === 'reading' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredReading.map((test) => {
                const testKey = `reading_${test.id}`;
                const savedScore = progress.skillsScores?.[testKey];

                return (
                  <div
                    key={test.id}
                    className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 hover:border-[#1A1A1A]/30 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 font-bold text-[10px] text-[#3E5C76] uppercase">
                          {test.level} • {test.genre}
                        </span>
                        <span className="text-[#1A1A1A]/50 text-[11px] flex items-center gap-1">
                          <Clock size={12} /> {test.estimatedMinutes} mins
                        </span>
                      </div>

                      <h3 className="font-serif italic font-bold text-base text-[#1A1A1A] leading-snug">
                        {test.title}
                      </h3>

                      <p className="text-xs text-[#1A1A1A]/70 font-sans line-clamp-2">
                        {test.passage.slice(0, 120)}...
                      </p>

                      <div className="flex items-center gap-2 text-[11px] text-[#1A1A1A]/60 pt-1">
                        <span>{test.wordCount} Words</span>
                        <span>•</span>
                        <span>{test.questions.length} Comprehension Questions</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                      {savedScore ? (
                        <div className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 size={14} />
                          <span>Passed: {savedScore.percentage}%</span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-[#1A1A1A]/50">Not yet attempted</span>
                      )}

                      <button
                        type="button"
                        onClick={() => handleStartReadingTest(test)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-[#333] transition-colors flex items-center gap-1"
                      >
                        <span>Read & Test</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* WRITING CATALOG */}
          {activeSkill === 'writing' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWriting.map((test) => {
                const testKey = `writing_${test.id}`;
                const savedScore = progress.skillsScores?.[testKey];

                return (
                  <div
                    key={test.id}
                    className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 hover:border-[#1A1A1A]/30 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 font-bold text-[10px] text-[#C25E3E] uppercase">
                          {test.level} • {test.taskType.replace('_', ' ')}
                        </span>
                        <span className="text-[#1A1A1A]/50 text-[11px] flex items-center gap-1">
                          <Clock size={12} /> {test.estimatedMinutes} mins
                        </span>
                      </div>

                      <h3 className="font-serif italic font-bold text-base text-[#1A1A1A] leading-snug">
                        {test.title}
                      </h3>

                      <p className="text-xs text-[#1A1A1A]/70 font-sans line-clamp-2">
                        {test.prompt}
                      </p>

                      <div className="flex items-center gap-2 text-[11px] text-[#1A1A1A]/60 pt-1">
                        <span>Target: {test.minWords}–{test.maxWords} Words</span>
                        <span>•</span>
                        <span>Rubric Evaluator</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                      {savedScore ? (
                        <div className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 size={14} />
                          <span>Score: {savedScore.score}/100</span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-[#1A1A1A]/50">Not yet attempted</span>
                      )}

                      <button
                        type="button"
                        onClick={() => handleStartWritingTest(test)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-[#333] transition-colors flex items-center gap-1"
                      >
                        <span>Write Prompt</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* SPEAKING CATALOG */}
          {activeSkill === 'speaking' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSpeaking.map((test) => {
                const testKey = `speaking_${test.id}`;
                const savedScore = progress.skillsScores?.[testKey];

                return (
                  <div
                    key={test.id}
                    className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 hover:border-[#1A1A1A]/30 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 font-bold text-[10px] text-[#7B4B94] uppercase">
                          {test.level} • {test.taskType.replace('_', ' ')}
                        </span>
                        <span className="text-[#1A1A1A]/50 text-[11px] flex items-center gap-1">
                          <Mic size={12} /> {test.speakingTimeSeconds}s Speaking
                        </span>
                      </div>

                      <h3 className="font-serif italic font-bold text-base text-[#1A1A1A] leading-snug">
                        {test.title}
                      </h3>

                      <p className="text-xs text-[#1A1A1A]/70 font-sans line-clamp-2">
                        {test.prompt}
                      </p>

                      <div className="text-[11px] text-[#1A1A1A]/60 pt-1">
                        <strong className="text-[#1A1A1A]">Focus:</strong> {test.grammarTarget}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                      {savedScore ? (
                        <div className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 size={14} />
                          <span>Accuracy: {savedScore.percentage}%</span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-[#1A1A1A]/50">Not yet attempted</span>
                      )}

                      <button
                        type="button"
                        onClick={() => handleStartSpeakingTest(test)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-[#333] transition-colors flex items-center gap-1"
                      >
                        <span>Speak Aloud</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

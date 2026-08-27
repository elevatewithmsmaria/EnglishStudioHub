import { Module, Topic, PracticeQuestion } from '../types';
import { lesson1Nouns } from './modules/lesson1_nouns';
import { lesson2Pronouns } from './modules/lesson2_pronouns';
import { lesson3Adjectives } from './modules/lesson3_adjectives';
import { lesson4Determiners } from './modules/lesson4_determiners';
import { lesson5VerbsTenses } from './modules/lesson5_verbs_tenses';
import { lesson6AuxiliaryVerbs } from './modules/lesson6_auxiliary_verbs';
import { lesson7Adverbs } from './modules/lesson7_adverbs';
import { lesson8Prepositions } from './modules/lesson8_prepositions';
import { lesson9Conjunctions } from './modules/lesson9_conjunctions';
import { lesson10Sentences } from './modules/lesson10_sentences';
import { lesson11Speech } from './modules/lesson11_speech';
import { lesson12Punctuation } from './modules/lesson12_punctuation';
import { FINAL_ASSESSMENT_QUESTIONS, DAILY_WORKOUT_QUESTIONS } from './assessmentData';

export const ALL_MODULES: Module[] = [
  lesson1Nouns,
  lesson2Pronouns,
  lesson3Adjectives,
  lesson4Determiners,
  lesson5VerbsTenses,
  lesson6AuxiliaryVerbs,
  lesson7Adverbs,
  lesson8Prepositions,
  lesson9Conjunctions,
  lesson10Sentences,
  lesson11Speech,
  lesson12Punctuation,
];

export const getModuleById = (id: number): Module | undefined => {
  return ALL_MODULES.find((m) => m.id === id);
};

export const getTopicById = (topicId: string): Topic | undefined => {
  for (const mod of ALL_MODULES) {
    const found = mod.topics.find((t) => t.id === topicId);
    if (found) return found;
  }
  return undefined;
};

export const getAllTopics = (): Topic[] => {
  return ALL_MODULES.flatMap((m) => m.topics);
};

export const getNextTopic = (currentTopicId: string): Topic | undefined => {
  const allTopics = getAllTopics();
  const currentIndex = allTopics.findIndex((t) => t.id === currentTopicId);
  if (currentIndex >= 0 && currentIndex < allTopics.length - 1) {
    return allTopics[currentIndex + 1];
  }
  return undefined;
};

// Ensure all module tests have a minimum of 20 questions
export const getQuizQuestionsForModule = (moduleId: number): PracticeQuestion[] => {
  const mod = getModuleById(moduleId);
  if (!mod) return [];

  const rawQuestions: PracticeQuestion[] = [];

  // Extract from topic quiz questions
  mod.topics.forEach((t) => {
    if (t.quizQuestions && t.quizQuestions.length > 0) {
      rawQuestions.push(...t.quizQuestions);
    }

    // Extract from interactive practice screens
    t.screens.forEach((s) => {
      if (s.type === 'practice' && s.questions) {
        rawQuestions.push(...s.questions);
      }
    });
  });

  // Deduplicate by ID
  const uniqueMap = new Map<string, PracticeQuestion>();
  rawQuestions.forEach((q) => {
    if (!uniqueMap.has(q.id)) {
      uniqueMap.set(q.id, q);
    }
  });

  let result = Array.from(uniqueMap.values());

  // If fewer than 20 questions, supplement from assessment and workout banks
  if (result.length < 20) {
    const supplementPool = [...FINAL_ASSESSMENT_QUESTIONS, ...DAILY_WORKOUT_QUESTIONS];
    for (const sup of supplementPool) {
      if (result.length >= 20) break;
      const modifiedId = `mod${moduleId}_supp_${sup.id}`;
      if (!result.some((r) => r.id === modifiedId || r.prompt === sup.prompt)) {
        result.push({
          ...sup,
          id: modifiedId
        });
      }
    }
  }

  return result.slice(0, 20);
};

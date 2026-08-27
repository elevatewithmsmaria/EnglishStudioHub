import React, { useState } from 'react';
import {
  Search,
  Bookmark,
  AlertTriangle,
  CheckCircle2,
  Table,
  Lightbulb,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { GRAMMAR_CHEAT_SHEETS, searchGrammarCheatSheets } from '../data/grammarCheatSheets';
import { GrammarCheatSheet } from '../types';
import { AudioButton } from './common/AudioButton';

interface ReferenceGuideViewProps {
  initialSearchQuery?: string;
}

export const ReferenceGuideView: React.FC<ReferenceGuideViewProps> = ({ initialSearchQuery = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSheets = searchGrammarCheatSheets(searchQuery).filter((sheet) => {
    if (selectedCategory === 'all') return true;
    return sheet.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const categories = ['all', 'Verbs & Agreement', 'Prepositions', 'Tenses', 'Nouns & Quantifiers', 'Articles'];

  const quickSearchPills = [
    'has vs have',
    'in on at',
    'simple vs continuous',
    'much vs many',
    'a vs an',
    'irregular verbs'
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200/80 pb-5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-2xs">
            Quick Grammar Reference
          </span>
        </div>
        <h1 className="mt-2 text-2xl sm:text-4xl font-serif italic font-black text-gray-900 tracking-tight">
          Adult Grammar Cheat Sheets & Quick Search
        </h1>
        <p className="text-sm text-gray-600 font-sans mt-1">
          Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-purple-700 underline hover:text-purple-900">Ms. Maria</a> for rapid lookup and rule clarity.
        </p>
      </div>

      {/* Instant Search Bar */}
      <div className="rounded-3xl border border-purple-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-3">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-3.5 text-purple-500" />
          <input
            id="grammar-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search grammar rules... (e.g. 'when do I use has?', 'in on at', 'much vs many')"
            className="w-full rounded-2xl border border-gray-200 bg-purple-50/30 py-3 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 font-sans shadow-2xs"
          />
        </div>

        {/* Quick search pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-bold text-gray-500 mr-1">Popular:</span>
          {quickSearchPills.map((pill, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSearchQuery(pill)}
              className="rounded-xl border border-purple-200 bg-purple-50/50 px-3 py-1 text-xs font-bold text-purple-800 hover:border-purple-400 hover:bg-purple-100 transition-colors shadow-2xs"
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all whitespace-nowrap shadow-2xs ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs scale-105'
                : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-900 border border-gray-200'
            }`}
          >
            {cat === 'all' ? 'All Cheat Sheets' : cat}
          </button>
        ))}
      </div>

      {/* Cheat Sheets Cards */}
      <div className="space-y-6">
        {filteredSheets.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center text-gray-500 shadow-2xs">
            <BookOpen size={36} className="mx-auto mb-2 text-purple-300" />
            <p className="font-bold text-gray-800">No matching cheat sheets found.</p>
            <p className="text-xs text-gray-500 mt-1">Try searching for keywords like "has", "prepositions", "much", or "verbs".</p>
          </div>
        ) : (
          filteredSheets.map((sheet) => (
            <div
              key={sheet.id}
              id={`cheat-sheet-${sheet.id}`}
              className="rounded-3xl border border-purple-100 bg-white p-6 sm:p-7 shadow-xs space-y-5"
            >
              {/* Sheet Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                <div>
                  <span className="rounded-full bg-purple-50 border border-purple-200 px-3 py-0.5 text-xs font-bold text-purple-700 uppercase tracking-wider">
                    {sheet.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif italic font-bold text-gray-900 mt-1">
                    {sheet.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 sm:text-right max-w-xs font-sans">
                  {sheet.summary}
                </p>
              </div>

              {/* Rules & Formulas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sheet.rules.map((rule, rIdx) => (
                  <div key={rIdx} className="rounded-2xl border border-purple-100 bg-purple-50/30 p-4 sm:p-5 space-y-3 shadow-2xs">
                    <h4 className="font-bold text-purple-950 text-sm font-sans">{rule.title}</h4>
                    <p className="text-xs text-gray-700 whitespace-pre-line leading-relaxed font-sans">
                      {rule.explanation}
                    </p>

                    {rule.formula && (
                      <div className="rounded-xl bg-white border border-purple-200 p-2.5 text-xs font-bold text-purple-900 shadow-2xs">
                        Formula: {rule.formula}
                      </div>
                    )}

                    <div className="space-y-1.5 pt-1">
                      {rule.examples.map((ex, eIdx) => (
                        <div key={eIdx} className="flex items-center justify-between rounded-xl bg-white p-2.5 text-xs border border-gray-100 shadow-2xs">
                          <div>
                            <span className="font-semibold text-gray-900 font-sans">"{ex.text}"</span>
                            {ex.note && <span className="text-[11px] text-gray-500 block">({ex.note})</span>}
                          </div>
                          <AudioButton text={ex.text} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table if present */}
              {sheet.comparisonTable && (
                <div className="overflow-hidden rounded-2xl border border-purple-200 shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-950 uppercase font-bold text-[11px]">
                      <tr>
                        {sheet.comparisonTable.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-3.5 py-3">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-50 bg-white">
                      {sheet.comparisonTable.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-purple-50/50">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`px-3.5 py-3 ${cIdx === 0 ? 'font-bold text-purple-950' : 'text-gray-700'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Watch Outs */}
              {sheet.watchOuts && sheet.watchOuts.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                    <AlertTriangle size={14} />
                    Watch Out (Common Traps):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sheet.watchOuts.map((w, wIdx) => (
                      <div key={wIdx} className="rounded-2xl border border-rose-200 bg-rose-50/70 p-3.5 text-xs space-y-1 shadow-2xs">
                        <div className="text-rose-700 line-through font-medium">❌ {w.wrong}</div>
                        <div className="text-emerald-800 font-bold">✅ {w.right}</div>
                        <p className="text-gray-600 text-[11px] font-sans mt-1">Reason: {w.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Tip Banner */}
              <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 text-xs text-amber-950 flex items-center gap-2 shadow-2xs">
                <Lightbulb size={16} className="text-amber-600 shrink-0" />
                <span className="font-sans"><strong className="text-amber-900 font-bold">Ms. Maria's Quick Tip:</strong> {sheet.quickTip}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

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
      <div className="border-b border-slate-200 pb-5">
        <span className="rounded-md bg-purple-50 border border-purple-200 px-2.5 py-1 text-xs font-bold text-purple-800 uppercase tracking-wider">
          Quick Grammar Reference
        </span>
        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Adult Grammar Cheat Sheets & Quick Search
        </h1>
        <p className="text-sm text-slate-600 font-medium">
          Instant answers to "When do I use...?", visual comparison tables, and watch-out traps.
        </p>
      </div>

      {/* Instant Search Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-3">
        <div className="relative">
          <Search size={18} className="absolute left-3.5 top-3.5 text-slate-400" />
          <input
            id="grammar-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search grammar rules... (e.g. 'when do I use has?', 'in on at', 'much vs many')"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 font-medium"
          />
        </div>

        {/* Quick search pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-semibold text-slate-400 mr-1">Popular:</span>
          {quickSearchPills.map((pill, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSearchQuery(pill)}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
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
            className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat === 'all' ? 'All Cheat Sheets' : cat}
          </button>
        ))}
      </div>

      {/* Cheat Sheets Cards */}
      <div className="space-y-6">
        {filteredSheets.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500">
            <BookOpen size={36} className="mx-auto mb-2 text-slate-300" />
            <p className="font-bold text-slate-800">No matching cheat sheets found.</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for keywords like "has", "prepositions", "much", or "verbs".</p>
          </div>
        ) : (
          filteredSheets.map((sheet) => (
            <div
              key={sheet.id}
              id={`cheat-sheet-${sheet.id}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-5"
            >
              {/* Sheet Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="rounded-md bg-indigo-50 px-2.5 py-0.5 text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    {sheet.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {sheet.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 sm:text-right max-w-xs font-medium">
                  {sheet.summary}
                </p>
              </div>

              {/* Rules & Formulas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sheet.rules.map((rule, rIdx) => (
                  <div key={rIdx} className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                    <h4 className="font-bold text-slate-900 text-sm">{rule.title}</h4>
                    <p className="text-xs text-slate-600 whitespace-pre-line leading-relaxed font-medium">
                      {rule.explanation}
                    </p>

                    {rule.formula && (
                      <div className="rounded-lg bg-white border border-indigo-100 p-2.5 text-xs font-bold text-indigo-900">
                        Formula: {rule.formula}
                      </div>
                    )}

                    <div className="space-y-1.5 pt-1">
                      {rule.examples.map((ex, eIdx) => (
                        <div key={eIdx} className="flex items-center justify-between rounded-lg bg-white p-2 text-xs border border-slate-100">
                          <div>
                            <span className="font-semibold text-slate-900">"{ex.text}"</span>
                            {ex.note && <span className="text-[11px] text-slate-500 block">({ex.note})</span>}
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
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px]">
                      <tr>
                        {sheet.comparisonTable.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-3.5 py-2.5">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {sheet.comparisonTable.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-slate-50">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`px-3.5 py-2.5 ${cIdx === 0 ? 'font-bold text-indigo-950' : 'text-slate-700'}`}>
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
                      <div key={wIdx} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs space-y-1">
                        <div className="text-rose-700 line-through font-medium">❌ {w.wrong}</div>
                        <div className="text-emerald-700 font-bold">✅ {w.right}</div>
                        <p className="text-slate-500 text-[11px] font-medium mt-1">Reason: {w.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Tip Banner */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950 flex items-center gap-2">
                <Lightbulb size={16} className="text-amber-600 shrink-0" />
                <span className="font-medium"><strong className="text-amber-900">Coach Quick Tip:</strong> {sheet.quickTip}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

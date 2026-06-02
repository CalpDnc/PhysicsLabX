/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { VIDEO_LECTURES } from '../data';
import { VideoLecture } from '../types';
import { 
  Play, 
  Search, 
  Tv, 
  Clock, 
  User, 
  BookOpen 
} from 'lucide-react';

export const Videos: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<9 | 10 | 11 | 12 | 0>(0); // 0 means all
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState<VideoLecture | null>(VIDEO_LECTURES[0]);

  // Filter video gallery
  const filteredVideos = VIDEO_LECTURES.filter((video) => {
    const matchesGrade = selectedGrade === 0 || video.grade === selectedGrade;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          video.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search & Class Filtering header */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between physics-glass-card p-4">
        <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto">
          {[
            { label: 'Tüm Seviyeler', value: 0 },
            { label: '9. Sınıf', value: 9 },
            { label: '10. Sınıf', value: 10 },
            { label: '11. Sınıf', value: 11 },
            { label: '12. Sınıf', value: 12 },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setSelectedGrade(item.value as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors border ${
                selectedGrade === item.value 
                  ? 'physics-tab-active' 
                  : 'physics-tab-inactive'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Konu veya ünite adı ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs bg-slate-950/40 border border-slate-800 rounded-lg pl-9 pr-4 py-2 outline-none focus:border-cyan-500 text-slate-200 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ACTIVE MAIN VIDEO PLAYER SECTION */}
        <div className="lg:col-span-8 space-y-4">
          {activeVideo ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md">
              {/* Responsive Iframe container */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?rel=0&autoplay=0`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video stats */}
              <div className="p-5 md:p-6 bg-slate-950 text-white space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
                  <span>{activeVideo.grade}. Sınıf Fizik</span>
                  <span>•</span>
                  <span>{activeVideo.topic}</span>
                </div>
                <h2 className="text-base md:text-lg font-bold tracking-tight text-white">{activeVideo.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><User className="h-4 w-4 text-slate-500" /> {activeVideo.author}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-slate-500" /> {activeVideo.duration} Dk</span>
                  <span className="flex items-center gap-1"><BookOpen className="h-4 w-4 text-slate-500" /> MEB EBA Akademik Destek Uyumlu</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center aspect-video bg-slate-150 rounded-2xl border border-slate-200 text-slate-400">
              <Tv className="h-12 w-12 text-slate-300 mb-3" />
              <p className="text-sm font-semibold">Oynatmak için bir konu anlatım videosu seçiniz.</p>
            </div>
          )}
        </div>

        {/* RELATED VIDEOS LIST VIEW */}
        <div className="lg:col-span-4 physics-glass-card p-4 space-y-4">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-2">Konu Anlatım Playlisti</h3>
          <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
            {filteredVideos.map((video) => {
              const isActive = activeVideo?.id === video.id;
              return (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 ${
                    isActive 
                      ? 'physics-list-item-active' 
                      : 'physics-list-item-inactive'
                  }`}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-900 text-slate-400'
                  }`}>
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold text-cyan-400 tracking-wider block uppercase">{video.grade}. SINIF • {video.topic}</span>
                    <p className="text-xs font-bold leading-normal text-white">{video.title}</p>
                    <span className="text-[10px] text-slate-400 font-medium block">{video.author}</span>
                  </div>
                </button>
              );
            })}

            {filteredVideos.length === 0 && (
              <p className="text-center py-8 text-xs text-slate-400 font-semibold">Aradığınız kriterlere uygun video bulunamadı.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

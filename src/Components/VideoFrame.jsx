import { useState } from "react";
import { FiPlay, FiVideo } from "react-icons/fi";

/** Turns a YouTube / Vimeo / file URL into something we can render. */
const parseVideo = (url) => {
  if (!url) return null;
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return { kind: "iframe", src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0` };
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return { kind: "iframe", src: `https://player.vimeo.com/video/${vm[1]}?autoplay=1` };
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return { kind: "file", src: url };
  return null;
};

/**
 * Responsive 16:9 video slot.
 *  - No url  -> "coming soon" placeholder (safe to ship before the video exists)
 *  - url     -> click-to-play facade; the embed only loads after the click
 *               (no third-party requests until the visitor chooses to play)
 */
const VideoFrame = ({ url = null, title, poster = null, caption, className = "" }) => {
  const [playing, setPlaying] = useState(false);
  const video = parseVideo(url);

  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-surface-800 bg-surface-950">
        {playing && video?.kind === "iframe" && (
          <iframe
            src={video.src}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        )}
        {playing && video?.kind === "file" && (
          <video src={video.src} title={title} poster={poster ?? undefined} controls autoPlay playsInline className="absolute inset-0 h-full w-full" />
        )}

        {!playing && (
          <>
            {poster ? (
              <img src={poster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-surface-800 to-surface-950">
                <div className="absolute inset-0 bg-grid opacity-20 [mask-image:none]" />
                {/* static face-scan frame, purely decorative */}
                <div className="absolute left-1/2 top-[42%] h-[46%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-brand-500/40">
                  <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-brand-400" />
                  <span className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-brand-400" />
                  <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-brand-400" />
                  <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-brand-400" />
                </div>
              </div>
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 p-5 text-center">
              {video ? (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play video: ${title}`}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white shadow-[var(--shadow-cta)] transition-transform group-hover:scale-105">
                    <FiPlay size={26} className="ml-1" aria-hidden="true" />
                  </span>
                </button>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs tracking-wider uppercase text-surface-300">
                  <FiVideo size={14} aria-hidden="true" />
                  Video coming soon
                </span>
              )}
            </div>
          </>
        )}
      </div>
      {caption && <figcaption className="mt-3 text-sm text-surface-400">{caption}</figcaption>}
    </figure>
  );
};

export default VideoFrame;

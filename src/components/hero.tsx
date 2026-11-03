"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

const VIDEO_ID = "TB4KBHZE6x8";

function sendPlayerCommand(iframe: HTMLIFrameElement | null, func: string) {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func, args: [] }),
    "*"
  );
}

export function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Autoplay-with-sound is blocked by most browsers without a user gesture,
  // so the video starts muted and the visitor opts in to audio.
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (muted) {
      sendPlayerCommand(iframeRef.current, "unMute");
      setMuted(false);
    } else {
      sendPlayerCommand(iframeRef.current, "mute");
      setMuted(true);
    }
  };

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* YouTube video background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/70 z-10" />
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          title="Video AATOPBC"
          className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ minWidth: "120vw", minHeight: "120vh" }}
          allow="autoplay; encrypted-media"
          loading="lazy"
        />
      </div>

      {/* Mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Activar sonido del video" : "Silenciar video"}
        aria-pressed={!muted}
        className="absolute bottom-28 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/60 active:scale-95"
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(24px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="font-heading text-fluid-3xl leading-tight text-white"
        >
          Baja California
          <br />
          <span className="text-sand">en manos expertas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, transform: "translateY(16px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-6 max-w-2xl text-fluid-lg text-white/85 font-body"
        >
          17 operadores locales. 4 ciudades. Una red que conoce cada rincón del estado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(12px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contacto"
            className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-transform duration-150 active:scale-[0.97] hover:brightness-110"
          >
            Solicitar Cotización
          </a>
          <a
            href="#experiencias"
            className="rounded-lg border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/80 active:scale-[0.97]"
          >
            Explorar Experiencias
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

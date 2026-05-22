"use client";
import { motion } from "framer-motion";
import type { Event } from "@/lib/sampleData";

const statusColors: Record<Event["status"], string> = {
  "on sale": "bg-marigold text-perf-black",
  "free": "bg-accent-green text-white",
  "tickets soon": "bg-soft-gray text-perf-black",
  "sold out": "bg-muted-text text-white",
};

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-paper-white flex flex-col cursor-pointer"
    >
      {/* Image */}
      <a href={`/events/${event.slug}`} aria-label={`${event.title} — ${event.date}`} className="block relative overflow-hidden aspect-[3/2]">
        <div className="absolute inset-0 bg-zinc-900">
          <img
            src={event.imageUrl}
            alt={event.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-perf-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        {/* Category label */}
        <span className="absolute top-3 left-3 text-white/80 text-[11px] font-bold uppercase tracking-widest bg-black/50 px-2 py-0.5">
          {event.category}
        </span>
        {/* Status badge */}
        <span className={`absolute top-3 right-3 text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 ${statusColors[event.status]}`}>
          {event.status}
        </span>
      </a>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 border-t border-soft-gray border-b-2 border-b-transparent group-hover:border-b-signal-red transition-colors duration-200">
        <a href={`/events/${event.slug}`} className="group/link">
          <h3 className="font-display text-perf-black text-base font-bold leading-tight mb-2 group-hover/link:text-signal-red transition-colors duration-150 normal-case">
            {event.title}
          </h3>
        </a>
        <p className="text-muted-text text-xs uppercase tracking-wide mb-4">{event.date}</p>
        <div className="mt-auto">
          <a
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-signal-red hover:gap-2 transition-all duration-150"
            aria-label={`More info about ${event.title}`}
          >
            more info <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

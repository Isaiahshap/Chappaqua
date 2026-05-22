import EventCard from "@/components/EventCard";
import { events } from "@/lib/sampleData";

export default function UpcomingEvents() {
  return (
    <section id="events" className="bg-warm-ivory py-20 md:py-28 border-t border-perf-black/10" aria-labelledby="events-heading">
      <div className="max-w-screen-xl mx-auto px-5 md:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 border-b border-soft-gray pb-5">
          <div>
            <p className="text-muted-text text-xs uppercase tracking-widest mb-2">what&apos;s on</p>
            <h2
              id="events-heading"
              className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-none uppercase"
            >
              coming soon
            </h2>
          </div>
          <a
            href="/events"
            className="text-perf-black text-sm font-bold uppercase tracking-widest hover:text-signal-red transition-colors flex items-center gap-1.5 pb-1 flex-shrink-0"
          >
            all events <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

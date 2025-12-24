import Link from "next/link";

type HubCard = {
  title: string;
  subtitle: string;
  href: string;
  badge?: string;
};

const hubCards: HubCard[] = [
  {
    title: "Glad Schools",
    subtitle: "Nursery · Kindergarten · Primary · (Secondary soon)",
    href: "/glad-schools",
    badge: "Education",
  },
  {
    title: "KIUL",
    subtitle: "Counselling · Mentorship · Short Courses · Revision · Publishing",
    href: "/kiul",
    badge: "Institute",
  },
  {
    title: "Katoki Radio",
    subtitle: "Community engagement, Ubuntu leadership, programmes",
    href: "/katoki-radio",
    badge: "KatokiMedia",
  },
  {
    title: "Katoki TV",
    subtitle: "Video programmes, talks, interviews, learning content",
    href: "/katoki-tv",
    badge: "KatokiMedia",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Katoki Foundation · Digital Hub
          </p>
          <span className="text-xs text-slate-500">Static site</span>
        </div>

        {/* Hero */}
        <div className="mt-8 rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-xl p-8 sm:p-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
              Katoki Foundation Hub
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-600">
              One gateway for our key activities. Choose a section below to see details,
              or to open the dedicated app for that service.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition"
              >
                How this hub works
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {hubCards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition">
                      {c.title}
                    </h2>
                    <p className="mt-2 text-slate-600">{c.subtitle}</p>
                  </div>

                  {c.badge ? (
                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {c.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 text-sm font-semibold text-blue-700">Open →</div>
              </Link>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-10 text-sm text-slate-500">
            Tip: Each major area can have its own dedicated app and domain, while this hub stays simple and stable.
          </div>
        </div>
      </div>
    </main>
  );
}

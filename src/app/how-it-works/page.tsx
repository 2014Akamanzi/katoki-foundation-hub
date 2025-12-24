import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12">
      <div className="mx-auto w-full max-w-4xl">
        {/* Top */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            <span aria-hidden>←</span> Back to Home
          </Link>

          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Katoki Foundation · Digital Hub
          </p>
        </div>

        {/* Card */}
        <div className="mt-8 rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            How this hub works
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            This hub is a simple gateway to Katoki Foundation’s main activities. Each button takes you
            to a short page that explains the activity and (where available) links to a dedicated web app.
          </p>

          <div className="mt-8 space-y-5 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-900">1) Choose a section</h2>
              <p className="mt-2">
                From the home page, select Glad Schools, KIUL, Katoki Radio, or Katoki TV.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-900">2) Read the short overview</h2>
              <p className="mt-2">
                Each section page gives a clear description of what the activity does, who it serves,
                and what resources or services are available.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-900">3) Open a dedicated app when ready</h2>
              <p className="mt-2">
                Where a dedicated app exists (example: KIUL Secondary School Revision), you will see a
                button that opens it directly.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-900">4) Keep the hub stable</h2>
              <p className="mt-2">
                The hub should remain simple and mostly static. Each service can evolve independently
                in its own app and domain, without breaking the hub.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

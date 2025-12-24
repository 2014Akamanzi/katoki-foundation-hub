import Link from "next/link";

export default function KatokiTvPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Back to Home
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Katoki Media
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-slate-900">
            Katoki TV
          </h1>

          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Katoki TV shares educational and community-centred programming, anchored in Ubuntu values.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Educational Content</h2>
              <p className="mt-1 text-sm text-slate-600">
                Short lessons, talks, and learning resources for schools and communities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Community Stories</h2>
              <p className="mt-1 text-sm text-slate-600">
                Stories and experiences that strengthen identity, dignity, and social cohesion.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-5">
            <p className="text-sm text-slate-600">
              For partnerships and enquiries, email{" "}
              <a className="font-semibold text-slate-900" href="mailto:info.kiul@katokifoundation.org">
                info.kiul@katokifoundation.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

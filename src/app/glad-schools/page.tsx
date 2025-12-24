import Link from "next/link";

export default function GladSchoolsPage() {
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
            Glad Schools · Katoki Foundation
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-slate-900">
            Glad Schools
          </h1>

          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Glad Schools serve learners from early childhood education through primary school,
            with plans to expand into secondary school.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Nursery</h2>
              <p className="mt-1 text-sm text-slate-600">
                A nurturing start focused on care, play, and early learning foundations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Kindergarten</h2>
              <p className="mt-1 text-sm text-slate-600">
                Early literacy, numeracy, confidence, and social development.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Primary</h2>
              <p className="mt-1 text-sm text-slate-600">
                Strong academic grounding with discipline, values, and learner support.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Secondary (Soon)</h2>
              <p className="mt-1 text-sm text-slate-600">
                Planned expansion to secondary education with a clear pathway for learners.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-5">
            <p className="text-sm text-slate-600">
              For enquiries, contact{" "}
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

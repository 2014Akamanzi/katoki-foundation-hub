import Link from "next/link";

export default function KiulPage() {
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
            Katoki Institute for Ubuntu Leadership (KIUL)
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-slate-900">
            KIUL Services
          </h1>

          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            KIUL delivers practical, Ubuntu-inspired support and learning through counselling,
            mentorship, short courses, and secondary school revision.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Counselling</h2>
              <p className="mt-1 text-sm text-slate-600">
                A supportive space for personal growth, wellbeing, and guidance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Mentorship</h2>
              <p className="mt-1 text-sm text-slate-600">
                Structured mentorship for students and young professionals.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Short Courses</h2>
              <p className="mt-1 text-sm text-slate-600">
                Skills-based learning delivered online with clear outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Secondary School Revision</h2>
              <p className="mt-1 text-sm text-slate-600">
                Exam-focused revision support for learners.
              </p>

              <div className="mt-4">
                <a
                  href="https://revision.katokifoundation.org"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Open Revision App
                </a>
              </div>
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

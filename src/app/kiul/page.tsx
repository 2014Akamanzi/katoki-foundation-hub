export default function KiulPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-3xl bg-white rounded-3xl shadow p-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Katoki Institute of Ubuntu Leadership (KIUL)
        </h1>

        <p className="mt-4 text-slate-600">
          KIUL governs specialised services that are delivered through their own
          dedicated web applications.
        </p>

        <ul className="mt-6 list-disc pl-6 text-slate-600 space-y-2">
          <li>Counselling</li>
          <li>Mentorship</li>
          <li>Short Courses</li>
          <li>Publishing</li>
          <li>Secondary School Revision</li>
        </ul>

        <p className="mt-6 text-slate-600">
          Example active service:
        </p>

        <a
          href="https://revision.katokifoundation.org"
          className="inline-block mt-3 rounded-xl bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700"
        >
          Open Revision App →
        </a>

        <div className="mt-8 text-sm text-slate-500">
          KIUL · Governance & learning pillar
        </div>
      </div>
    </main>
  );
}

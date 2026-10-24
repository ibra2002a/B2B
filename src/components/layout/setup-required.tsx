/** Shown instead of the app when public Supabase settings are missing (for example a fresh preview deployment). */
export function SetupRequired({ missing }: { missing: string[] }) {
  return (
    <main dir="rtl" lang="ar" className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center gap-6 px-4 py-16">
      <p className="text-sm font-bold tracking-widest text-brand-700">VENDORA</p>
      <h1 className="text-3xl font-extrabold text-brand-900">الموقع يحتاج إلى إعداد قبل التشغيل</h1>
      <p className="text-muted">لم يتم ضبط الاتصال بقاعدة البيانات. أضف المتغيرات التالية في إعدادات المشروع ثم أعد النشر.</p>
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
        <p className="font-semibold text-brand-900">المتغيرات الناقصة:</p>
        <ul dir="ltr" className="mt-3 list-disc space-y-1 ps-6 text-start text-sm text-ink">
          {missing.map((name) => (
            <li key={name} className="font-mono">{name}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">التفاصيل في ملف README.md (القسم 3 و 5).</p>
      </div>
    </main>
  );
}

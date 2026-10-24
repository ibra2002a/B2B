/** Names of required public settings that are missing or malformed. Never reads secrets. */
export function missingPublicSettings(): string[] {
  const missing: string[] = [];
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !/^https:\/\/.+/.test(url)) missing.push('NEXT_PUBLIC_SUPABASE_URL');
  if (!anon || anon.length < 20) missing.push('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  if (!process.env.NEXT_PUBLIC_SITE_URL) missing.push('NEXT_PUBLIC_SITE_URL');
  return missing;
}

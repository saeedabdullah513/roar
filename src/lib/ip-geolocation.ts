export interface IpGeoData {
  ipAddress?: string;
  ipCity?: string;
  ipRegion?: string;
  ipCountry?: string;
  ipIsp?: string;
}

export async function fetchIpGeolocation(): Promise<IpGeoData> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return {};
    const json = await res.json();
    return {
      ipAddress: json.ip || undefined,
      ipCity: json.city || undefined,
      ipRegion: json.region || undefined,
      ipCountry: json.country_name || undefined,
      ipIsp: json.org || undefined,
    };
  } catch {
    return {};
  }
}

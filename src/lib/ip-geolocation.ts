export interface IpGeoData {
  ipAddress?: string;
  ipCity?: string;
  ipCountry?: string;
}

export async function fetchIpGeolocation(): Promise<IpGeoData> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return {};
    const json = await res.json();
    return {
      ipAddress: json.ip || undefined,
      ipCity: json.city || undefined,
      ipCountry: json.country_name || undefined,
    };
  } catch {
    return {};
  }
}

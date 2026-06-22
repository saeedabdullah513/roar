export interface IpGeoData {
  ipAddress?: string;
  ipCity?: string;
  ipRegion?: string;
  ipCountry?: string;
  ipIsp?: string;
}

export async function fetchIpGeolocation(): Promise<IpGeoData> {
  try {
    const res = await fetch("http://ip-api.com/json/?fields=query,country,regionName,city,isp", { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return {};
    const json = await res.json();
    return {
      ipAddress: json.query || undefined,
      ipCity: json.city || undefined,
      ipRegion: json.regionName || undefined,
      ipCountry: json.country || undefined,
      ipIsp: json.isp || undefined,
    };
  } catch {
    return {};
  }
}

export interface IpGeoData {
  ipAddress?: string;
  ipCity?: string;
  ipRegion?: string;
  ipCountry?: string;
  ipIsp?: string;
}

export async function fetchIpGeolocation(): Promise<IpGeoData> {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    if (!res.ok) return {};
    const json = await res.json();
    return { ipAddress: json.ip || undefined };
  } catch {
    return {};
  }
}

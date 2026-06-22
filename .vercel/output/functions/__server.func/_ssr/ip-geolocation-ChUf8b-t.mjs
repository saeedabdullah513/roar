async function fetchIpGeolocation() {
  try {
    const res = await fetch("http://ip-api.com/json/?fields=query,country,regionName,city,isp", { signal: AbortSignal.timeout(5e3) });
    if (!res.ok) return {};
    const json = await res.json();
    return {
      ipAddress: json.query || void 0,
      ipCity: json.city || void 0,
      ipRegion: json.regionName || void 0,
      ipCountry: json.country || void 0,
      ipIsp: json.isp || void 0
    };
  } catch {
    return {};
  }
}
export {
  fetchIpGeolocation as f
};

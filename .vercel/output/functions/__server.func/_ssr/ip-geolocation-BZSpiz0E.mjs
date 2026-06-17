async function fetchIpGeolocation() {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5e3) });
    if (!res.ok) return {};
    const json = await res.json();
    return {
      ipAddress: json.ip || void 0,
      ipCity: json.city || void 0,
      ipCountry: json.country_name || void 0
    };
  } catch {
    return {};
  }
}
export {
  fetchIpGeolocation as f
};

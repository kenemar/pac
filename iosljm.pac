function FindProxyForURL(url, host) {
// If the URL matches blocked patter, block
    if (dnsDomainIs(host, "music.apple.com") ||
	dnsDomainIs(host, "giphy.com"))
        return "PROXY 0.0.0.0:8080;";
//DEFAULT RULE: Allow all other traffic
        return "DIRECT;" }
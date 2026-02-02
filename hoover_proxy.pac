// If the URL matches allow pattern, bypass
function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*idemia*") ||
    dnsDomainIs(host, "business.google.com") ||
    dnsDomainIs(host, "accounts.google.com") ||
    dnsDomainIs(host, "clients3.google.com") ||
    dnsDomainIs(host, "serverkm.com") ||
    shExpMatch(host, "*googletagmanager.com") ||
    shExpMatch(host, "*googleusercontent.com") ||
    shExpMatch(host, "*push.apple.com") ||
    shExpMatch(host, "*gstatic.com") ||
    shExpMatch(host, "*idemia.io") ||
    shExpMatch(host, "*run.app") ||
    shExpMatch(host, "*truckertools.com") ||
    shExpMatch(host, "*icloud.com"))
    return "DIRECT";
//DEFAULT RULE: Route all other traffic to log/block proxy
    return "PROXY 168.86.236.177:8321"; }

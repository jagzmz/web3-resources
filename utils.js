// get Domain from url
export const getDomain = (url) => {
    if (!url) return;
    const domain = new URL(url);
    return domain.hostname.replace("www.", "");
};

export function searchSongsUrl(keyword) {
    return `https://itunes.apple.com/search?term=${encodeURIComponent(keyword)}`;
}
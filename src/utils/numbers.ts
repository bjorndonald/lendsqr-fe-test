import mediaQuery from "css-mediaquery";
export function numberWithCommas(x: number | string | undefined) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0'
}

function createMatchMedia(width: number) {
    return (query: string) => {
        return {
            matches: mediaQuery.match(query, { width }),
            media: "",
            addListener: () => { },
            removeListener: () => { },
            onchange: () => { },
            addEventListener: () => { },
            removeEventListener: () => { },
            dispatchEvent: () => true,
        };
    };
}

export function resizeScreenSize(width: number) {
    window.matchMedia = createMatchMedia(width);
}
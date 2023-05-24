export function numberWithCommas(x: number | string | undefined) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0'
}
export function nextUuId() {
    const s: any = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 32; i++) {
        const start = Math.floor(Math.random() * 0x10);
        s[i] = hexDigits.substring(start, start + 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    const start = (s[19] & 0x3) | 0x8;
    s[19] = hexDigits.substring(start, start + 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23];
    return s.join('');
}

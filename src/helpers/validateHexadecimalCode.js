export function validateHexadecimalCode (hexCode) {
    const pattern = new RegExp("^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$");
    return pattern.test(hexCode);
};
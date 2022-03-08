export const getRandomColor = () => {
    return (Math.random()* 0xFFFFFF << 0).toString(16).padStart(6, '0');
};

export const validateHexadecimalCode = hexCode => {
    const pattern = new RegExp("^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$");
    return pattern.test(hexCode);
};
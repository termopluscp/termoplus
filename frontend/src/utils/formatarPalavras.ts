export function formatarPalavras(str: string) {
    str = str.replace(/[aáàãäâ]/g, "a");
    str = str.replace(/[eéèëê]/g, "e");
    str = str.replace(/[iíìïî]/g, "i");
    str = str.replace(/[oóòõöô]/g, "o");
    str = str.replace(/[uúùüû]/g, "u");
    str = str.replace(/[ç]/g, "c");
    return str;
}


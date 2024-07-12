import bcrypt from "bcrypt";

export async function hash(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}
export async function compare(password, hash) {
    return await bcrypt.compare(password, hash);
}
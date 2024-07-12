import jwt from "jsonwebtoken";
const key = process.env.key ?? "djafljdsalfjdslfjdklsaf";

export function hash(data) {
    return jwt.sign(data, key);
}
export function verify(token) {
    return jwt.verify(token, key);
}
export function decode(token) {
    return jwt.decode(token);
}

// generar-hashes.mjs
import bcrypt from 'bcrypt';

const passwords = ['Pass123!', 'Segura2024!', 'P@ssw0rd#99'];

for (const pwd of passwords) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pwd, salt);
    console.log(`${pwd} → ${hash}`);
}
import fs from 'fs';
import path from 'path';


function parseEnv() {

    const envPath = path.resolve(__dirname, '../.env');
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const envVars = {};

    // Split file content by new lines
    const lines = envContent.split('\n');

    lines.forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            envVars[key.trim()] = value.trim();
        }
    });

    return envVars;
}

// Export the parsed environment variables
const env = parseEnv();

module.exports = env;

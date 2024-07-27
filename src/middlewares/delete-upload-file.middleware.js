import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const deleteUploadFile = (fileName) => {
    try {
        fileName = fileName.split('/')[2];
        const filePath = path.resolve(__dirname, '..', '..', 'public', 'uploads', fileName);
        fs.unlinkSync(filePath);
        console.log(`File ${fileName} was deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting file ${fileName}:`, error.message);
    }
};

export default deleteUploadFile;


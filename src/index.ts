import 'dotenv/config';
import app from './app';
import { init } from './database/connection';
import './models/associations';
import * as admin from "firebase-admin";
admin.initializeApp();

import { createAdmin } from './middlewares/updateTables';


const PORT = process.env.PORT;

async function main() {
    await init();
    app.listen(PORT, () => {
        console.log('Server running on port:', PORT);
        createAdmin("admin", "admin@admin.com", "123456789");
    });

}

main();

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { createLanguageModel, createJsonTranslator, processRequests } from "typechat";
import { Resume } from "./resumeSchema";

// TODO: use local .env file.
dotenv.config({ path: path.join(__dirname, "../../../.env") });

const model = createLanguageModel(process.env);
const schema = fs.readFileSync(path.join(__dirname, "resumeSchema.ts"), "utf8");
const translator = createJsonTranslator<Resume>(model, schema, "Resume");

function processResume(resume: Resume) {
    // Process the items in the cart
    void resume;
}

// Process requests interactively or from the input file specified on the command line
processRequests("RM> ", process.argv[2], async (request) => {
    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }
    const resume = response.data;
    console.log(JSON.stringify(resume, undefined, 2));
    processResume(resume);
    console.log("Success!");
});
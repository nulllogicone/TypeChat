import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { createLanguageModel, createJsonTranslator, processRequests } from "typechat";
import { ResumeResponse } from "./ResumeSchema";

// TODO: use local .env file.
dotenv.config({ path: path.join(__dirname, "../../../.env") });

const model = createLanguageModel(process.env);
const schema = fs.readFileSync(path.join(__dirname, "resumeSchema.ts"), "utf8");
const translator = createJsonTranslator<ResumeResponse>(model, schema, "ResumeResponse");

// Process requests interactively or from the input file specified on the command line
processRequests("RM> ", process.argv[2], async (request) => {
    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }
    console.log(`The resume is ${response.data.resume}`);
});

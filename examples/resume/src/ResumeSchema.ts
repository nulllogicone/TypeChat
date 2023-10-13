// The following is a schema definition for determining the resume of a some user input.

export interface ResumeResponse {
    sentiment: "negative" | "neutral" | "positive";  // The sentiment of the text
}

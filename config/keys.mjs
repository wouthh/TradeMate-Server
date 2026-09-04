import dotenv from "dotenv";

dotenv.config();

const SIGNING_SECRET_EXAMPLE = "replace-with-a-local-development-secret";

const requiredEnvironmentVariable = (name, disallowedValue) => {
  const value = process.env[name];

  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  const normalizedValue = value.trim();

  if (disallowedValue && normalizedValue === disallowedValue) {
    throw new Error(`Replace the example value for environment variable: ${name}`);
  }

  return normalizedValue;
};

export const mongoURI = requiredEnvironmentVariable("MONGO_URI");
export const passportSecretKey = requiredEnvironmentVariable(
  "PASSPORT_SECRETKEY",
  SIGNING_SECRET_EXAMPLE
);

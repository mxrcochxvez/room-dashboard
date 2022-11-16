import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { apiKey } from "../../../env/apiKey";

/**
 * The custom base query prepares the headers of each request in order to communicate with the azure functions
 */
const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://destifyfunc-api-dev.azurewebsites.net/api/rooms",
  prepareHeaders: (headers) => {
    headers.set("x-functions-key", apiKey);
    return headers;
  },
});

export default customBaseQuery;

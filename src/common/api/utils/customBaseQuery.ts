import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

/**
 * The custom base query prepares the headers of each request in order to communicate with the azure functions
 */
const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://destifyfunc-api-dev.azurewebsites.net/api/rooms",
  prepareHeaders: (headers) => {
    headers.set(
      "x-functions-key",
      "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA=="
    );
    return headers;
  },
});

export default customBaseQuery;

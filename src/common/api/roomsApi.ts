import { createApi } from "@reduxjs/toolkit/query/react";
import { Agent } from "http";
import { Group, Hotel, Payments, Room, Transfer, Traveler } from "../models";
import customBaseQuery from "./utils/customBaseQuery";

export interface RoomInfo {
  group: Group[];
  room: Room[];
  hotel: Hotel[];
  travelers: Traveler[];
  payments: Payments[];
  transfer: Transfer[];
  agent: Agent;
}

export type RoomInfoResult = {
  roomInfo: RoomInfo[];
};

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: customBaseQuery,
  tagTypes: ["room", "rooms"],

  endpoints: (builder) => ({
    /**
     * This function uses Generics to determine the function parameters and the returned result of the function.
     * It takes an array of Room IDs and returns an array of Room informations.
     */
    getRoomById: builder.query<RoomInfoResult, string[]>({
      query: (roomId) => ({
        url: `?roomIds=${roomId}`,
      }),
    }),
  }),
});

export const { useGetRoomByIdQuery } = roomsApi;

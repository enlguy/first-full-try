import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    firstname: v.string()!,
    lastname: v.string()!,
    birthdate: v.string(),
    sex: v.string(),
    preferences: v.string(),
    photos: v.array(v.string()),
    latitude: v.float64(),
    longitude: v.float64(),
  })
    .index("by_email", ["email"])
    .index("by_clerkId", ["clerkId"]),
});

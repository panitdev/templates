import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

export type Env = {
  // Bindings go here, e.g.:
  // DB: D1Database;
  // KV: KVNamespace;
};

const app = new Hono<{ Bindings: Env }>();

app.use(logger());
app.use(
  cors({
    origin: "*", // tighten in production
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/health", (c) => c.json({ ok: true }));

export default app;

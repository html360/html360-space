import express from "express";
import { spaceStore } from "@/core/space.store";

const app = express();
const PORT = 3000;

app.get("/api/status", (_req, res) => {
  console.log(`@@@@@@@@@@@@@@@@@${spaceStore.status}`);

  res.json({ status: 200 });
});

app.listen(PORT, () => {
  console.log(`📡 API запущен на http://localhost:${PORT}`);
});

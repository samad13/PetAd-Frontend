import { http, HttpResponse, delay } from "msw";
import type { TimelineEntry } from "../../types/adoption";

const MOCK_TIMELINE: TimelineEntry[] = [
  {
    fromStatus: null,
    toStatus: "ESCROW_CREATED",
    actor: "System",
    timestamp: "2026-03-25T10:00:00Z",
    reason: "Initial adoption request",
  },
  {
    fromStatus: "ESCROW_CREATED",
    toStatus: "ESCROW_FUNDED",
    actor: "Adopter",
    timestamp: "2026-03-25T11:30:00Z",
    sdkTxHash: "0x1234...5678",
    stellarExplorerUrl: "https://stellar.expert/explorer/public/tx/1234",
  },
  {
    fromStatus: "ESCROW_FUNDED",
    toStatus: "SETTLEMENT_TRIGGERED",
    actor: "System",
    timestamp: "2026-03-26T09:15:00Z",
    reason: "Auto-settlement after inspection",
  },
];

export const adoptionHandlers = [
  http.get("/api/adoption/:id/timeline", async () => {
    await delay(100);
    return HttpResponse.json(MOCK_TIMELINE);
  }),
];

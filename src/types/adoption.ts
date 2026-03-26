export type AdoptionStatus =
  | "ESCROW_CREATED"
  | "ESCROW_FUNDED"
  | "SETTLEMENT_TRIGGERED"
  | "DISPUTED"
  | "FUNDS_RELEASED";

export interface AdoptionTimelineEntry {
  id: string;
  adoptionId: string;
  timestamp: string;
  sdkEvent: string;
  message: string;
  actor?: string;
}

export interface TimelineEntry {
  fromStatus: AdoptionStatus | null;
  toStatus: AdoptionStatus;
  actor: string;
  reason?: string;
  sdkTxHash?: string;
  stellarExplorerUrl?: string;
  timestamp: string;
}

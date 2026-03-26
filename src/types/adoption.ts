export type AdoptionStatus =
  | "ESCROW_CREATED"
  | "ESCROW_FUNDED"
  | "SETTLEMENT_TRIGGERED"
  | "DISPUTED"
  | "FUNDS_RELEASED"
  | "CUSTODY_ACTIVE"
  | "COMPLETED"
  | "CANCELLED";

export interface AdoptionTimelineEntry {
  id: string;
  adoptionId: string;
  timestamp: string;
  sdkEvent: string;
  message: string;
  actor?: string;
}

export interface AdoptionDetails {
  id: string;
  status: AdoptionStatus;
  petId: string;
  adopterId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustodyDetails {
  id: string;
  status: AdoptionStatus;
  petId: string;
  custodianId: string;
  ownerId: string;
  startDate: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

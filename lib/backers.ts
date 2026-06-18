/**
 * Symbolic Founding Shares system.
 *
 * IMPORTANT LEGAL DISCLAIMER (enforced in UI + API):
 * These "Founding Shares" are a symbolic, commemorative reward.
 * They confer NO equity, ownership, shares, dividends, voting rights,
 * or any security interest in Doobie Drone Deliveries or any entity.
 * This is a game-like loyalty / community system only.
 */

export const TOTAL_SHARES = 2_000_000;

export interface Backer {
  email: string;
  name?: string;
  shares: number; // symbolic only
  createdAt: string;
  updatedAt: string;
}

/**
 * In-memory + file-backed store for demo purposes.
 * In production replace with a real database (Supabase, Postgres, etc.).
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), ".backers");
const DATA_FILE = path.join(DATA_DIR, "backers.json");

let cache: Record<string, Backer> | null = null;

async function load(): Promise<Record<string, Backer>> {
  if (cache) return cache;
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    cache = JSON.parse(raw);
  } catch {
    cache = {};
  }
  return cache!;
}

async function save(data: Record<string, Backer>) {
  cache = data;
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

export async function getBacker(email: string): Promise<Backer | null> {
  const data = await load();
  return data[email.toLowerCase()] ?? null;
}

export async function upsertBacker(
  email: string,
  update: Partial<Omit<Backer, "email" | "createdAt">>
): Promise<Backer> {
  const data = await load();
  const key = email.toLowerCase();
  const existing = data[key];

  const now = new Date().toISOString();
  const backer: Backer = existing
    ? {
        ...existing,
        ...update,
        updatedAt: now,
      }
    : {
        email: key,
        name: update.name,
        shares: update.shares ?? 0,
        createdAt: now,
        updatedAt: now,
      };

  data[key] = backer;
  await save(data);
  return backer;
}

export async function addShares(email: string, amount: number): Promise<Backer> {
  const b = await getBacker(email);
  const current = b?.shares ?? 0;
  return upsertBacker(email, { shares: Math.max(0, current + amount) });
}

export function sharesToPercent(shares: number): string {
  const pct = (shares / TOTAL_SHARES) * 100;
  return pct < 0.01 ? "<0.01%" : `${pct.toFixed(2)}%`;
}

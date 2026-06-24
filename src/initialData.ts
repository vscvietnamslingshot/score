import { DistanceConfig, Athlete, MatchHistoryItem, StoredAthleteList } from "./types";

export const DEFAULT_DISTANCES: DistanceConfig[] = [
  { id: "d1", distance: "10 Met", multiplier: 10 },
  { id: "d2", distance: "15 Met", multiplier: 15 },
];

export const DEFAULT_SHOTS_COUNT = 10;

export const DEFAULT_ATHLETES: Athlete[] = [
  {
    id: "0001",
    name: "Nguyễn Văn Mẫu",
    team: "CLB Bắn Ná Việt Nam",
    scores: {
      d1: [true, false, true, false, false, true, true, false, false, false], // 4 trúng -> 40 điểm
      d2: [true, true, true, false, true, false, false, true, true, true],   // 7 trúng -> 105 điểm
    },
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    idCard: "037096001234",
    dob: "1996-05-12",
    hometown: "Sơn Tây",
    province: "Hà Nội",
    country: "Vietnam",
    countryCode: "VN",
  }
];

export const DEFAULT_HISTORY: MatchHistoryItem[] = [
  {
    id: "hist-1",
    date: "2026-06-15T10:00:00Z",
    matchName: "Giải Giao Hữu CLB Bắn Ná Việt Nam (Mẫu)",
    shotCount: 10,
    distances: [
      { id: "d1", distance: "10 Met", multiplier: 10 },
      { id: "d2", distance: "15 Met", multiplier: 15 },
    ],
    athletes: [
      {
        id: "0001",
        name: "Nguyễn Văn Mẫu",
        team: "CLB Bắn Ná Việt Nam",
        scores: {
          d1: [true, true, true, true, false, false, false, false, false, false],
          d2: [true, true, true, true, true, true, true, true, true, true],
        },
      },
    ],
  },
];

export const DEFAULT_STORED_LISTS: StoredAthleteList[] = [
  {
    id: "list-1",
    name: "Danh Sách Roster Mẫu VĐV",
    createdAt: "2026-06-15T10:00:00Z",
    athletes: [
      {
        id: "0001",
        name: "Nguyễn Văn Mẫu",
        team: "CLB Bắn Ná Việt Nam",
        scores: {
          d1: [false, false, false, false, false, false, false, false, false, false],
          d2: [false, false, false, false, false, false, false, false, false, false],
        },
        avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        idCard: "037096001234",
        dob: "1996-05-12",
        hometown: "Sơn Tây",
        province: "Hà Nội",
        country: "Vietnam",
        countryCode: "VN",
      }
    ]
  }
];


export type CategoryId = 
  | 'geldzaken'
  | 'werk-en-inkomen'
  | 'wonen'
  | 'welzijn'
  | 'jongeren'
  | 'veiligheid';

export interface Category {
  id: CategoryId;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  color: string;
  badgeBg: string;
  textColor: string;
  iconName: string;
  exampleQuestions: string[];
  whatWeDo: string;
  emergencyNotice?: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  isServiceOnly?: boolean; // For "Spreekuur Huiselijk Geweld"
  categories: CategoryId[];
  spreekruimteDefault?: string;
  contactNote: string;
  logoPlaceholderText?: string;
  publicationStatus: 'concept' | 'gepubliceerd';
  verifiedInRooster: boolean;
}

export interface ScheduleEntry {
  id: string;
  organizationId: string;
  serviceName: string;
  dayOfWeek: 1 | 2 | 3 | 4 | 5; // 1 = Ma, 2 = Di, 3 = Wo, 4 = Do, 5 = Vr
  dateString?: string; // Optional specific date e.g. '2026-03-02'
  startTime: string; // e.g. "09:30"
  endTime: string; // e.g. "12:30"
  location: string; // e.g. "Spreekruimte 1"
  notes?: string;
  publicationStatus: 'concept' | 'gepubliceerd';
  updatedAt: string;
  sourceReference: string; // e.g. "WWD rooster 0326-1.pptx (Maart 2026, versie 1)"
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'algemeen' | 'inloop' | 'hulp' | 'organisaties' | 'privacy';
}

export type ViewMode = 'week' | 'day' | 'list';

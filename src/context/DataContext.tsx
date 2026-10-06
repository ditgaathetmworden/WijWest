import React, { createContext, useContext, useState, useEffect } from 'react';
import { Category, Organization, ScheduleEntry, FAQItem } from '../types';
import { CATEGORIES, ORGANIZATIONS, INITIAL_SCHEDULE, FAQS } from '../data/initialData';

interface DataContextType {
  categories: Category[];
  organizations: Organization[];
  schedule: ScheduleEntry[];
  faqs: FAQItem[];
  weekOffset: number;
  setWeekOffset: (offset: number | ((prev: number) => number)) => void;
  addScheduleEntry: (entry: Omit<ScheduleEntry, 'id' | 'updatedAt'>) => void;
  updateScheduleEntry: (id: string, entry: Partial<ScheduleEntry>) => void;
  deleteScheduleEntry: (id: string) => void;
  toggleScheduleStatus: (id: string) => void;
  resetToInitialData: () => void;
  exportScheduleCSV: (filteredEntries?: ScheduleEntry[]) => void;
  getOrganizationById: (id: string) => Organization | undefined;
  getOrganizationBySlug: (slug: string) => Organization | undefined;
  getCategoryById: (id: string) => Category | undefined;
  getCategoryBySlug: (slug: string) => Category | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEY_SCHEDULE = 'wwd_schedule_v1';
const STORAGE_KEY_ORGS = 'wwd_orgs_v1';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories] = useState<Category[]>(CATEGORIES);
  const [organizations, setOrganizations] = useState<Organization[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ORGS);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return ORGANIZATIONS;
  });

  const [schedule, setSchedule] = useState<ScheduleEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SCHEDULE);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_SCHEDULE;
  });

  const [weekOffset, setWeekOffset] = useState<number>(0);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SCHEDULE, JSON.stringify(schedule));
    } catch {
      // ignore
    }
  }, [schedule]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ORGS, JSON.stringify(organizations));
    } catch {
      // ignore
    }
  }, [organizations]);

  const addScheduleEntry = (entry: Omit<ScheduleEntry, 'id' | 'updatedAt'>) => {
    const newEntry: ScheduleEntry = {
      ...entry,
      id: `entry-${Date.now()}`,
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setSchedule(prev => [...prev, newEntry]);
  };

  const updateScheduleEntry = (id: string, updated: Partial<ScheduleEntry>) => {
    setSchedule(prev => prev.map(entry => {
      if (entry.id === id) {
        return {
          ...entry,
          ...updated,
          updatedAt: new Date().toISOString().split('T')[0]
        };
      }
      return entry;
    }));
  };

  const deleteScheduleEntry = (id: string) => {
    setSchedule(prev => prev.filter(entry => entry.id !== id));
  };

  const toggleScheduleStatus = (id: string) => {
    setSchedule(prev => prev.map(entry => {
      if (entry.id === id) {
        return {
          ...entry,
          publicationStatus: entry.publicationStatus === 'gepubliceerd' ? 'concept' : 'gepubliceerd',
          updatedAt: new Date().toISOString().split('T')[0]
        };
      }
      return entry;
    }));
  };

  const resetToInitialData = () => {
    setSchedule(INITIAL_SCHEDULE);
    setOrganizations(ORGANIZATIONS);
    localStorage.removeItem(STORAGE_KEY_SCHEDULE);
    localStorage.removeItem(STORAGE_KEY_ORGS);
  };

  const getOrganizationById = (id: string) => {
    return organizations.find(org => org.id === id);
  };

  const getOrganizationBySlug = (slug: string) => {
    return organizations.find(org => org.slug === slug);
  };

  const getCategoryById = (id: string) => {
    return categories.find(cat => cat.id === id);
  };

  const getCategoryBySlug = (slug: string) => {
    return categories.find(cat => cat.slug === slug);
  };

  const exportScheduleCSV = (filteredEntries?: ScheduleEntry[]) => {
    const dataToExport = filteredEntries || schedule;
    const days = ['', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

    const headers = [
      'Dag',
      'Starttijd',
      'Eindtijd',
      'Spreekuurnaam',
      'Organisatie',
      'Locatie / Spreekruimte',
      'Status',
      'Bron / Notitie',
      'Laatst bijgewerkt'
    ];

    const rows = dataToExport.map(item => {
      const org = getOrganizationById(item.organizationId);
      return [
        days[item.dayOfWeek] || `Dag ${item.dayOfWeek}`,
        item.startTime,
        item.endTime,
        `"${item.serviceName.replace(/"/g, '""')}"`,
        `"${(org?.name || item.organizationId).replace(/"/g, '""')}"`,
        `"${(item.location || 'Onbekend').replace(/"/g, '""')}"`,
        item.publicationStatus,
        `"${(item.notes || item.sourceReference || '').replace(/"/g, '""')}"`,
        item.updatedAt
      ].join(';');
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `wij-west-dichtbij-rooster-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <DataContext.Provider
      value={{
        categories,
        organizations,
        schedule,
        faqs: FAQS,
        weekOffset,
        setWeekOffset,
        addScheduleEntry,
        updateScheduleEntry,
        deleteScheduleEntry,
        toggleScheduleStatus,
        resetToInitialData,
        exportScheduleCSV,
        getOrganizationById,
        getOrganizationBySlug,
        getCategoryById,
        getCategoryBySlug
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

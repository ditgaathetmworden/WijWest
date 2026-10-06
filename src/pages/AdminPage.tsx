import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { NoticeBanner } from '../components/common/NoticeBanner';
import { ScheduleEntry } from '../types';
import {
  Sliders,
  Plus,
  Trash2,
  Edit2,
  Eye,
  EyeOff,
  RotateCcw,
  Download,
  CheckCircle2,
  Calendar,
  Building2,
  Clock,
  MapPin,
  X
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    schedule,
    organizations,
    categories,
    addScheduleEntry,
    updateScheduleEntry,
    deleteScheduleEntry,
    toggleScheduleStatus,
    resetToInitialData,
    exportScheduleCSV
  } = useData();

  const [activeTab, setActiveTab] = useState<'rooster' | 'organisaties'>('rooster');
  const [editingEntry, setEditingEntry] = useState<ScheduleEntry | null>(null);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Form state for creating new entry
  const [newEntryData, setNewEntryData] = useState({
    organizationId: organizations[0]?.id || '',
    serviceName: '',
    dayOfWeek: 1 as 1 | 2 | 3 | 4 | 5,
    startTime: '10:00',
    endTime: '12:00',
    location: 'Spreekruimte 1',
    notes: '',
    publicationStatus: 'gepubliceerd' as 'concept' | 'gepubliceerd',
    sourceReference: 'Ingevoerd via Beheerpaneel Wij West Dichtbij'
  });

  const dayNames = ['', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntryData.serviceName.trim()) {
      alert('Vul alsjeblieft een naam voor het spreekuur in.');
      return;
    }

    addScheduleEntry(newEntryData);
    setIsNewModalOpen(false);
    setNewEntryData({
      organizationId: organizations[0]?.id || '',
      serviceName: '',
      dayOfWeek: 1,
      startTime: '10:00',
      endTime: '12:00',
      location: 'Spreekruimte 1',
      notes: '',
      publicationStatus: 'gepubliceerd',
      sourceReference: 'Ingevoerd via Beheerpaneel Wij West Dichtbij'
    });
    showNotification('Spreekuur succesvol toegevoegd aan het rooster!');
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEntry) return;

    updateScheduleEntry(editingEntry.id, {
      serviceName: editingEntry.serviceName,
      dayOfWeek: editingEntry.dayOfWeek,
      startTime: editingEntry.startTime,
      endTime: editingEntry.endTime,
      location: editingEntry.location,
      notes: editingEntry.notes,
      publicationStatus: editingEntry.publicationStatus
    });

    setEditingEntry(null);
    showNotification('Spreekuur gewijzigd en opgeslagen!');
  };

  return (
    <div className="py-8 sm:py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Beheer & CMS' }]} />

        {/* Header */}
        <div className="mt-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#595959] mb-1">
              <Sliders className="w-4 h-4 text-[#201B20]" />
              <span>Centraal Databeheer</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#201B20] tracking-tight">
              Rooster- & Inhoudsbeheer
            </h1>
            <p className="mt-2 text-base text-[#595959]">
              Beheer hier direct de spreekuren, organisaties en publicatiestatus van Wij West Dichtbij.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="secondary"
              size="sm"
              icon={<RotateCcw className="w-4 h-4" />}
              onClick={() => {
                if (window.confirm('Weet je zeker dat je het rooster wilt herstellen naar de originele data uit maart 2026?')) {
                  resetToInitialData();
                  showNotification('Rooster hersteld naar officiële versie maart 2026 (versie 1).');
                }
              }}
              title="Herstel naar basisbestand"
            >
              Herstel basisdata
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={<Download className="w-4 h-4" />}
              onClick={() => exportScheduleCSV()}
            >
              Export CSV
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<Plus className="w-4 h-4" />}
              onClick={() => setIsNewModalOpen(true)}
            >
              Nieuw spreekuur
            </Button>
          </div>
        </div>

        {/* Feedback message */}
        {notification && (
          <div className="mb-6 p-4 rounded-2xl bg-[#B8D1A8]/30 border border-[#B8D1A8] text-xs font-bold text-[#201B20] flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-[#201B20]" />
            <span>{notification}</span>
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-2xl border border-[#201B20]/10 shadow-2xs">
            <span className="text-xs text-[#595959]">Totaal spreekuren</span>
            <p className="text-2xl font-black text-[#201B20] mt-1 tabular-nums">{schedule.length}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#201B20]/10 shadow-2xs">
            <span className="text-xs text-[#595959]">Gepubliceerd</span>
            <p className="text-2xl font-black text-[#201B20] mt-1 tabular-nums">
              {schedule.filter(s => s.publicationStatus === 'gepubliceerd').length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#201B20]/10 shadow-2xs">
            <span className="text-xs text-[#595959]">Concepten</span>
            <p className="text-2xl font-black text-[#8C8C8C] mt-1 tabular-nums">
              {schedule.filter(s => s.publicationStatus === 'concept').length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#201B20]/10 shadow-2xs">
            <span className="text-xs text-[#595959]">Partnerorganisaties</span>
            <p className="text-2xl font-black text-[#201B20] mt-1 tabular-nums">{organizations.length}</p>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 border-b border-[#201B20]/10 pb-4 mb-6">
          <button
            onClick={() => setActiveTab('rooster')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'rooster'
                ? 'bg-[#201B20] text-white shadow-xs'
                : 'bg-white text-[#595959] hover:text-[#201B20] border border-[#201B20]/10'
            }`}
          >
            Roosteritems ({schedule.length})
          </button>
          <button
            onClick={() => setActiveTab('organisaties')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'organisaties'
                ? 'bg-[#201B20] text-white shadow-xs'
                : 'bg-white text-[#595959] hover:text-[#201B20] border border-[#201B20]/10'
            }`}
          >
            Organisaties ({organizations.length})
          </button>
        </div>

        {/* TAB 1: ROOSTER BEHEER */}
        {activeTab === 'rooster' && (
          <div className="bg-white rounded-3xl border border-[#201B20]/10 shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-[#201B20]/10 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base text-[#201B20]">Alle spreekuren in het rooster</h3>
                <p className="text-xs text-[#595959]">Klik op bewerken of wissel tussen concept en gepubliceerd.</p>
              </div>
            </div>

            <div className="divide-y divide-[#201B20]/10">
              {schedule.map(entry => {
                const org = organizations.find(o => o.id === entry.organizationId);
                const isPublished = entry.publicationStatus === 'gepubliceerd';

                return (
                  <div
                    key={entry.id}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-extrabold text-sm text-[#201B20]">
                          {dayNames[entry.dayOfWeek]} {entry.startTime} – {entry.endTime}
                        </span>
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                            isPublished
                              ? 'bg-[#B8D1A8]/30 text-[#201B20]'
                              : 'bg-[#F1EA90]/40 text-[#201B20]'
                          }`}
                        >
                          {entry.publicationStatus}
                        </span>
                        <span className="text-xs text-[#8C8C8C]">
                          Locatie: {entry.location}
                        </span>
                      </div>

                      <h4 className="font-bold text-sm text-[#201B20]">
                        {org?.name || entry.organizationId} — <span className="text-[#595959]">{entry.serviceName}</span>
                      </h4>

                      {entry.notes && (
                        <p className="text-xs text-[#595959] line-clamp-1">{entry.notes}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => toggleScheduleStatus(entry.id)}
                        className="p-2 rounded-lg border border-[#201B20]/10 text-xs font-semibold hover:bg-white text-[#201B20] cursor-pointer flex items-center gap-1"
                        title={isPublished ? 'Zet op concept' : 'Publiceer'}
                      >
                        {isPublished ? <Eye className="w-3.5 h-3.5 text-[#595959]" /> : <EyeOff className="w-3.5 h-3.5 text-[#8C8C8C]" />}
                        <span className="hidden sm:inline">{isPublished ? 'Gepubliceerd' : 'Concept'}</span>
                      </button>

                      <button
                        onClick={() => setEditingEntry(entry)}
                        className="p-2 rounded-lg border border-[#201B20]/10 text-xs font-semibold hover:bg-white text-[#201B20] cursor-pointer flex items-center gap-1"
                        title="Bewerken"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Bewerk</span>
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`Weet je zeker dat je het spreekuur "${entry.serviceName}" wilt verwijderen?`)) {
                            deleteScheduleEntry(entry.id);
                            showNotification('Spreekuur verwijderd.');
                          }
                        }}
                        className="p-2 rounded-lg border border-red-200 text-xs font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
                        title="Verwijder spreekuur"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: ORGANISATIES OVERZICHT */}
        {activeTab === 'organisaties' && (
          <div className="bg-white rounded-3xl border border-[#201B20]/10 shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-[#201B20]/10">
              <h3 className="font-extrabold text-base text-[#201B20]">Partnerorganisaties ({organizations.length})</h3>
              <p className="text-xs text-[#595959]">Geregistreerde partners uit het basisbestand.</p>
            </div>

            <div className="divide-y divide-[#201B20]/10">
              {organizations.map(org => {
                const orgCategories = categories.filter(c => org.categories.includes(c.id));
                const orgEntriesCount = schedule.filter(s => s.organizationId === org.id).length;

                return (
                  <div key={org.id} className="p-4 sm:p-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-sm text-[#201B20]">{org.name}</h4>
                        {org.isServiceOnly && (
                          <span className="text-[10px] bg-[#FAF8ED] text-[#201B20] px-2 py-0.5 rounded-md font-semibold">
                            Dienst
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#595959] mt-1">{org.shortDescription}</p>
                      <div className="flex items-center gap-1.5 mt-2 flex-wrap text-[11px] text-[#8C8C8C]">
                        {orgCategories.map(c => (
                          <span key={c.id} className="bg-[#FAF9F6] border border-[#201B20]/10 px-2 py-0.5 rounded-md text-[#201B20]">
                            {c.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right text-xs shrink-0">
                      <span className="font-bold text-[#201B20]">{orgEntriesCount}</span> spreekuren in rooster
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MODAL: NIEUW SPREEKUUR */}
        {isNewModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-[#201B20]/10 mb-4">
                <h3 className="text-lg font-black text-[#201B20]">Nieuw spreekuur toevoegen</h3>
                <button onClick={() => setIsNewModalOpen(false)} className="p-1 text-[#8C8C8C] hover:text-[#201B20]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Organisatie</label>
                  <select
                    value={newEntryData.organizationId}
                    onChange={e => setNewEntryData({ ...newEntryData, organizationId: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  >
                    {organizations.map(o => (
                      <option key={o.id} value={o.id}>{o.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Naam van het spreekuur</label>
                  <input
                    type="text"
                    required
                    placeholder="Bijv. Inloopspreekuur Geldzaken"
                    value={newEntryData.serviceName}
                    onChange={e => setNewEntryData({ ...newEntryData, serviceName: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#201B20] mb-1">Dag</label>
                    <select
                      value={newEntryData.dayOfWeek}
                      onChange={e => setNewEntryData({ ...newEntryData, dayOfWeek: Number(e.target.value) as any })}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                    >
                      <option value={1}>Maandag</option>
                      <option value={2}>Dinsdag</option>
                      <option value={3}>Woensdag</option>
                      <option value={4}>Donderdag</option>
                      <option value={5}>Vrijdag</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#201B20] mb-1">Starttijd</label>
                    <input
                      type="text"
                      placeholder="10:00"
                      value={newEntryData.startTime}
                      onChange={e => setNewEntryData({ ...newEntryData, startTime: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#201B20] mb-1">Eindtijd</label>
                    <input
                      type="text"
                      placeholder="12:00"
                      value={newEntryData.endTime}
                      onChange={e => setNewEntryData({ ...newEntryData, endTime: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Locatie / Ruimte</label>
                  <input
                    type="text"
                    placeholder="Bijv. Spreekruimte 1"
                    value={newEntryData.location}
                    onChange={e => setNewEntryData({ ...newEntryData, location: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Toelichting</label>
                  <textarea
                    rows={2}
                    placeholder="Korte beschrijving voor bezoekers..."
                    value={newEntryData.notes}
                    onChange={e => setNewEntryData({ ...newEntryData, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Publicatiestatus</label>
                  <select
                    value={newEntryData.publicationStatus}
                    onChange={e => setNewEntryData({ ...newEntryData, publicationStatus: e.target.value as any })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  >
                    <option value="gepubliceerd">Gepubliceerd (direct zichtbaar voor publiek)</option>
                    <option value="concept">Concept (alleen zichtbaar met label)</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-2 pt-4 border-t border-[#201B20]/10">
                  <Button type="button" variant="secondary" size="sm" onClick={() => setIsNewModalOpen(false)}>
                    Annuleren
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Opslaan in rooster
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: SPREEKUUR BEWERKEN */}
        {editingEntry && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-[#201B20]/10 mb-4">
                <h3 className="text-lg font-black text-[#201B20]">Spreekuur bewerken</h3>
                <button onClick={() => setEditingEntry(null)} className="p-1 text-[#8C8C8C] hover:text-[#201B20]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUpdateSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Naam van het spreekuur</label>
                  <input
                    type="text"
                    required
                    value={editingEntry.serviceName}
                    onChange={e => setEditingEntry({ ...editingEntry, serviceName: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#201B20] mb-1">Dag</label>
                    <select
                      value={editingEntry.dayOfWeek}
                      onChange={e => setEditingEntry({ ...editingEntry, dayOfWeek: Number(e.target.value) as any })}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                    >
                      <option value={1}>Maandag</option>
                      <option value={2}>Dinsdag</option>
                      <option value={3}>Woensdag</option>
                      <option value={4}>Donderdag</option>
                      <option value={5}>Vrijdag</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#201B20] mb-1">Starttijd</label>
                    <input
                      type="text"
                      value={editingEntry.startTime}
                      onChange={e => setEditingEntry({ ...editingEntry, startTime: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#201B20] mb-1">Eindtijd</label>
                    <input
                      type="text"
                      value={editingEntry.endTime}
                      onChange={e => setEditingEntry({ ...editingEntry, endTime: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Locatie / Ruimte</label>
                  <input
                    type="text"
                    value={editingEntry.location}
                    onChange={e => setEditingEntry({ ...editingEntry, location: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Toelichting</label>
                  <textarea
                    rows={2}
                    value={editingEntry.notes || ''}
                    onChange={e => setEditingEntry({ ...editingEntry, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#201B20] mb-1">Status</label>
                  <select
                    value={editingEntry.publicationStatus}
                    onChange={e => setEditingEntry({ ...editingEntry, publicationStatus: e.target.value as any })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#201B20]/15 rounded-xl text-sm"
                  >
                    <option value="gepubliceerd">Gepubliceerd</option>
                    <option value="concept">Concept</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-2 pt-4 border-t border-[#201B20]/10">
                  <Button type="button" variant="secondary" size="sm" onClick={() => setEditingEntry(null)}>
                    Annuleren
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Wijziging opslaan
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

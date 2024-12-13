import { useTouristSites } from '../../hooks/useTouristSites';
import LoadingSpinner from '../common/LoadingSpinner';

interface TouristSiteSelectorProps {
  selectedSite: string;
  onSiteChange: (siteId: string) => void;
}

export default function TouristSiteSelector({ selectedSite, onSiteChange }: TouristSiteSelectorProps) {
  const { sites, loading, error } = useTouristSites();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Select Tourist Site
      </label>
      <select
        value={selectedSite}
        onChange={(e) => onSiteChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select a destination</option>
        {sites.map((site) => (
          <option key={site.id} value={site.id}>
            {site.name}
          </option>
        ))}
      </select>
    </div>
  );
}
'use client';

import { MapContainer, TileLayer, Polygon, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { coverageZones, mapCenter, defaultZoom } from '@/data/coverageZones';

export default function LeafletMap() {
    return (
        <MapContainer
            center={mapCenter}
            zoom={defaultZoom}
            scrollWheelZoom={false}
            className="h-full w-full rounded-xl z-0"
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {coverageZones.map((zone) => (
                <Polygon
                    key={zone.id}
                    positions={zone.coordinates}
                    pathOptions={{
                        color: zone.color,
                        fillColor: zone.color,
                        fillOpacity: 0.2,
                        weight: 2
                    }}
                >
                    <Tooltip sticky>{zone.name}</Tooltip>
                    <Popup>
                        <div className="p-2">
                            <h3 className="font-bold text-lg">{zone.name}</h3>
                            <p className="text-sm">This area is fully covered by Simple Connectivity.</p>
                        </div>
                    </Popup>
                </Polygon>
            ))}
        </MapContainer>
    );
}

export interface CoverageZone {
    id: string;
    name: string;
    coordinates: [number, number][]; // Array of [lat, lng]
    color: string;
}

// Center of Springs, Gauteng
const SPRINGS_CENTER = {
    lat: -26.2540,
    lng: 28.4406
};

// Approximate coverage area (can be edited by adding more precise coordinates)
export const coverageZones: CoverageZone[] = [
    {
        id: 'springs-central',
        name: 'Springs Central Coverage',
        color: '#0066FF', // Primary brand color
        coordinates: [
            [-26.2300, 28.4100],
            [-26.2300, 28.4700],
            [-26.2800, 28.4700],
            [-26.2800, 28.4100],
        ]
    }
];

export const mapCenter: [number, number] = [SPRINGS_CENTER.lat, SPRINGS_CENTER.lng];
export const defaultZoom = 13;

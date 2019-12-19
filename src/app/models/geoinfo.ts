export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Properties {
    wikipedia: string;
    city: string;
}

export interface FeatureData {
    geometry: Geometry;
    type: string;
    properties: Properties;
    id: string;
}

export interface GeoInfo {
    Title: string;
    Instructions: string;
    Description: string;
    FeatureData: FeatureData[];
}


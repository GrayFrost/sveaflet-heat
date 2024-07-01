// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// import * as L from "leaflet";
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// interface HeatOptions {}

	// namespace L {
	// 	function heatLayer(latlngs: LatLngBoundsExpression[], options?: HeatOptions): Layer;
	// }

	// interface Window {
	// 	L: L;
	// }
}

/**
 * Inspired by https://www.npmjs.com/package/@types/leaflet.heat
*/
declare module "leaflet" {
	type HeatLatLngTuple = [number, number, number];

	interface ColorGradientConfig {
			[key: number]: string;
	}

	interface HeatMapOptions {
			minOpacity?: number | undefined;
			maxZoom?: number | undefined;
			max?: number | undefined;
			radius?: number | undefined;
			blur?: number | undefined;
			gradient?: ColorGradientConfig | undefined;
	}

	interface HeatLayer extends TileLayer {
			setOptions(options: HeatMapOptions): HeatLayer;
			addLatLng(latlng: LatLng | HeatLatLngTuple): HeatLayer;
			setLatLngs(latlngs: Array<LatLng | HeatLatLngTuple>): HeatLayer;
	}

	function heatLayer(latlngs: Array<LatLng | HeatLatLngTuple>, options: HeatMapOptions): HeatLayer;
}

export {};

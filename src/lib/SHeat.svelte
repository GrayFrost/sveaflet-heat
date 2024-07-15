<script lang="ts">
	import { Map } from 'leaflet';
	import type { HeatMapOptions, HeatLayer, LatLng, HeatLatLngTuple } from 'leaflet';
	import 'leaflet.heat';
	import { onMount, onDestroy, getContext } from 'svelte';
	import type { LeafletContextInterface } from 'sveaflet';

	const L = window.L;
	export let latLngs: Array<LatLng | HeatLatLngTuple>;
	export let options: HeatMapOptions = {};
	export let instance: HeatLayer | undefined = undefined;

	// context
	let parentContext = getContext<LeafletContextInterface>(Map);
	const { getMap } = parentContext;

	// data
	let heat: HeatLayer | undefined;

	$: map = getMap();
	$: instance = heat;

	onMount(() => {
		heat = L.heatLayer(latLngs, options);
	});

	$: if (map) {
		if (heat) {
			map.addLayer(heat);
		}
	}

	onDestroy(() => {
		heat?.remove();
		heat = undefined;
	});
</script>

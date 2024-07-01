<script lang="ts">
	import { Map } from 'leaflet';
	import type { HeatMapOptions, LatLng, HeatLayer } from 'leaflet';
	import 'leaflet.heat';
	import { onMount, onDestroy, getContext } from 'svelte';
	import type { LeafletContextInterface } from 'sveaflet';

	const L = window.L;
	export let latlngs: LatLng[];
	export let options: HeatMapOptions = {};
	let heat: HeatLayer | undefined;

	let parentContext = getContext<LeafletContextInterface>(Map);
	const { getMap } = parentContext;

	$: map = getMap();

	onMount(() => {
		heat = L.heatLayer(latlngs, options);
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

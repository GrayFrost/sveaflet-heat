<script lang="ts">
	import { Map } from 'leaflet';
	import type { HeatMapOptions, HeatLayer, LatLng, HeatLatLngTuple } from 'leaflet';
	import 'leaflet.heat';
	import { onMount, onDestroy, getContext } from 'svelte';
	import type { LeafletContextInterface } from 'sveaflet';

	const L = window.L;

	// props
	type Props = {
		latLngs: Array<LatLng | HeatLatLngTuple>;
		options?: HeatMapOptions;
		instance?: HeatLayer;
	} & {
		[key: string]: unknown;
	};

	let { latLngs, options = {}, instance = $bindable(), ...restProps }: Props = $props();

	// context
	let parentContext = getContext<LeafletContextInterface>(Map);
	const { getMap } = parentContext;

	// data
	let heat: HeatLayer | undefined = $state();

	let map = $derived(getMap());

	$effect(() => {
		instance = heat;
	});

	onMount(() => {
		heat = L.heatLayer(latLngs, options);
	});

	$effect(() => {
		if (map) {
			if (heat) {
				map.addLayer(heat);
			}
		}
	});

	onDestroy(() => {
		heat?.remove();
		heat = undefined;
	});
</script>

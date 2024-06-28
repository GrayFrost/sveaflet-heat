<script>
  import { Map } from 'leaflet';
  import 'leaflet.heat';
  import { onMount, onDestroy, getContext } from 'svelte';

  const L = window.L;
  export let latlngs;
	export let options = {};
  let heat;

  let parentContext = getContext(Map);
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

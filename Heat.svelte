<script>
  import { Map } from 'leaflet';
  import 'leaflet.heat';
  import { onMount, onDestroy, getContext } from 'svelte';

  const L = window.L;
  export let points;
  let heat;

  let parentContext = getContext(Map);
  const { getMap } = parentContext;
  let ready = false;

  $: map = getMap();

  onMount(() => {
    heat = L.heatLayer(points);
    ready = true;
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
---
layout: componentLayout
breadcrumb_title: basic
title: Basic Example
component_title: Basic Example
dir: examples
description: Examples about how to use Sveaflet-Heat
---

## Default Heat

```svelte example csr
<script>
	import { Map, TileLayer } from 'sveaflet';
	import { latLng } from 'leaflet';
	import { Heat } from 'sveaflet-heat';
	import { addressPoints } from '../assets/realword.10000.js';

	$: latlngs = addressPoints.map((item) => latLng([item[0], item[1]].map(Number)));
</script>

<div style="width:800px;height:600px;">
	<Map options={{ center: [-37.87, 175.475], zoom: 12 }}>
		<TileLayer
			url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
			options={{
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}}
		/>
		<Heat {latlngs} />
	</Map>
</div>
```

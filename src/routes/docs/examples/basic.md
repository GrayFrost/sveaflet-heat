---
layout: componentLayout
breadcrumb_title: todo
title: todo
component_title: todo
dir: examples
description: todo
---

basic example

```svelte example csr
<script>
	import { Map, TileLayer } from 'sveaflet';
	import { Heat } from 'sveaflet-heat';
	import { addressPoints } from '../assets/realword.10000.js';
</script>

<div style="width:800px;height:600px;">
	<Map options={{ center: [-37.87, 175.475], zoom: 12 }}>
		<TileLayer urlTemplate={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} options={{
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		}}/>
		<Heat latlngs={addressPoints.map(item => [item[0], item[1]])} />
	</Map>
</div>
```

---
layout: componentLayout
breadcrumb_title: basic
title: Basic Example
component_title: Basic Example
dir: examples
description: Examples about how to use Sveaflet-Heat
---

## Setup

```svelte example csr hideOutput
<script>
	import { Heat } from 'sveaflet-heat';
</script>
```

## Default Heat

```svelte example csr
<script>
	import { Map, TileLayer } from 'sveaflet';
	import { latLng } from 'leaflet';
	import { Heat } from 'sveaflet-heat';
	import { addressPoints } from '../assets/realword.10000.js';

	$: latLngs = addressPoints.map((item) => latLng([item[0], item[1]].map(Number)));
</script>

<div style="width:100%; height:500px;">
	<Map options={{ center: [-37.87, 175.475], zoom: 12 }}>
		<TileLayer
			url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
			options={{
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}}
		/>
		<Heat {latLngs} />
	</Map>
</div>
```

## Heat with Options

```svelte example csr
<script>
	import { Map, TileLayer } from 'sveaflet';
	import { latLng } from 'leaflet';
	import { Heat } from 'sveaflet-heat';
	import { addressPoints } from '../assets/realword.10000.js';

	$: latLngs = addressPoints.map((item) => latLng([item[0], item[1]].map(Number)));
</script>

<div style="width:100%; height:500px;">
	<Map options={{ center: [-37.87, 175.475], zoom: 12 }}>
		<TileLayer
			url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
			options={{
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}}
		/>
		<Heat
			{latLngs}
			options={{
				gradient: {
					0.4: 'pink',
					0.65: 'orange',
					1: 'purple'
				}
			}}
		/>
	</Map>
</div>
```

## Props

| Prop name | Description  | Type                                                                                   | Default |
| --------- | ------------ | -------------------------------------------------------------------------------------- | ------- |
| latLngs   | **Required** | [LatLng](https://leafletjs.com/reference.html#latlng)[]                                |         |
| options   | **Optional** | [HealMapOptions](https://github.com/Leaflet/Leaflet.heat?tab=readme-ov-file#reference) | `{}`    |

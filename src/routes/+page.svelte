<script lang="ts">
	// import { MetaTags } from 'svelte-meta-tags';
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { latLng } from 'leaflet';
	import type { Marker as MarkerType } from 'leaflet';
	import { Map, TileLayer, Marker, Popup } from 'sveaflet';
	import { addressPoints } from '../routes/docs/assets/realword.10000';
	// import Footer from './utils/Footer.svelte';
	import Heat from '$lib/Heat.svelte';

	let logo = '/images/sveaflet.png';
	let marker: MarkerType;

	$: if (marker) {
		marker.openPopup();
	}

	let title = 'Sveaflet-Heat - A plugin of Sveaflet';
	let description =
		'Sveaflet is an open-source Map component library built with Svelte components and Leaflet that can help you build your map page faster.';
</script>

<!-- <MetaTags
	{title}
	{description}
	openGraph={{
		type: 'website',
		url: `https://sveaflet.vercel.app/`,
		title: `${title}`,
		description: `${description}`,
		siteName: 'Sveaflet'
	}}
/> -->

<main class="flex-auto min-w-0 lg:static lg:max-h-full lg:overflow-visible">
	<!-- <div class="flex justify-center items-center mx-auto my-8 relative w-[240px] h-[200px]">
		<img src={logo} alt="logo" class="w-full h-full" />
	</div> -->
	<p class="flex justify-center my-8 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
		Sveaflet-Heat - A plugin of Sveaflet
	</p>

	<div class="flex justify-center my-8">
		<Button href="/docs/pages/introduction"
			>Get Started<ArrowRightOutline class="w-6 h-6 ms-2" /></Button
		>
	</div>

	<div
		class="h-[600px] px-4 lg:h-[600px] lg:px-20 md:h-[320px] md:px-10 my-8 mx-auto max-w-[90rem] py-8"
	>
		<Map
			options={{
				center: [-37.87, 175.475],
				zoom: 12
			}}
		>
			<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
			<Heat latlngs={addressPoints.map((item) => latLng([Number(item[0]), Number(item[1])]))} />
		</Map>
	</div>
	<!-- <Footer /> -->
</main>

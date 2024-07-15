<script lang="ts">
	// import { MetaTags } from 'svelte-meta-tags';
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { latLng } from 'leaflet';
	import type { Marker as MarkerType } from 'leaflet';
	import { Map, TileLayer, Marker, Popup } from 'sveaflet';
	import { addressPoints } from '../routes/docs/assets/realword.10000';
	// import Footer from './utils/Footer.svelte';
	import Heat from '$lib/SHeat.svelte';

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

<main class="min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
	<!-- <div class="flex justify-center items-center mx-auto my-8 relative w-[240px] h-[200px]">
		<img src={logo} alt="logo" class="w-full h-full" />
	</div> -->
	<p class="my-8 flex justify-center text-lg sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">
		Sveaflet-Heat - A plugin of Sveaflet
	</p>

	<div class="my-8 flex justify-center">
		<Button href="/docs/pages/introduction"
			>Get Started<ArrowRightOutline class="ms-2 h-6 w-6" /></Button
		>
	</div>

	<div
		class="mx-auto my-8 h-[600px] max-w-[90rem] px-4 py-8 md:h-[320px] md:px-10 lg:h-[600px] lg:px-20"
	>
		<Map
			options={{
				center: [-37.87, 175.475],
				zoom: 12
			}}
		>
			<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
			<Heat latLngs={addressPoints.map((item) => latLng(Number(item[0]), Number(item[1])))} />
		</Map>
	</div>
	<!-- <Footer /> -->
</main>

<script lang="ts">
	export let data: any; // todo typescript

	const posts: Record<string, any[]> = data.posts;
</script>

<main>
	<slot />
</main>

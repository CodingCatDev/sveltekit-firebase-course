<script lang="ts">
	export let data;

	import LayoutWrapper from '$lib/shared/LayoutWrapper.svelte';
	import { Doc } from 'sveltefire';
</script>

<LayoutWrapper>
	<Doc ref={`posts/${data.post?.id}`} let:data startWith={data.post}>
		<article class="container">
			<h1 class="text-3xl">{data?.title}</h1>
			<p class="text-xl">{data?.description}</p>
			{#if data?.cover}
				<img
					class="rounded"
					loading="lazy"
					src={data.cover}
					alt={data?.coverAlt || 'Image of Something'}
				/>
			{/if}
			<p>{@html data?.body}</p>
		</article>
		<p slot="loading">Loading...</p>
	</Doc>
</LayoutWrapper>

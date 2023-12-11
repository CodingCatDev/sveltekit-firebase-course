<script lang="ts">
	import '../app.postcss';

	// Skeleton Components
	import { AppShell, storePopup, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// WhiskerWord Components
	import WwAppBar from './(layout-partials)/WWAppBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<WwAppBar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

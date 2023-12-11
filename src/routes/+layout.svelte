<script lang="ts">
	import '../app.postcss';

	// Skeleton Components
	import {
		AppShell,
		AppBar,
		Modal,
		ProgressRadial,
		Toast,
		storePopup,
		initializeStores
	} from '@skeletonlabs/skeleton';
	initializeStores();

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// WhiskerWord Components
	import WwAppBar from './(layout-partials)/WWAppBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<WwAppBar />
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

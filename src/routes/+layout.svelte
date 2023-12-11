<script lang="ts">
	import '../app.postcss';

	// Skeleton Components
	import { AppShell, storePopup, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Firebase
	import { auth, firestore, storage } from '$lib/client/firebase';
	import { FirebaseApp } from 'sveltefire';

	// WhiskerWord Components
	import WwAppBar from './(layout-partials)/WWAppBar.svelte';
</script>

<FirebaseApp {auth} {firestore} {storage}>
	<AppShell>
		<svelte:fragment slot="header">
			<WwAppBar />
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
</FirebaseApp>

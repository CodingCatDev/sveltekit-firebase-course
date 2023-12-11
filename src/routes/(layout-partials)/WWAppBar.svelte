<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3 } from '@steeze-ui/heroicons';

	// Skeleton
	import {
		AppBar,
		getDrawerStore,
		type DrawerSettings,
		Avatar,
		popup,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

	// Firebase
	import { userStore } from 'sveltefire';
	import { auth } from '$lib/client/firebase'; // your firebase auth instance
	const user = userStore(auth);

	// Navigation
	import { storeCurrentUrl } from '$lib/stores';
	import LogoutButton from '../login/LogoutButton.svelte';

	$: classesActive = (href: string) =>
		$storeCurrentUrl?.split('/').at(-1) === href ? 'bg-primary-active-token hover:text-token' : '';
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<!-- <svelte:window on:keydown|stopPropagation={onWindowKeydown} /> -->
<AppBar shadow="shadow-xl">
	<svelte:fragment slot="lead">
		<div class="flex items-center gap-2">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="w-10 lg:!hidden" aria-label="Open Drawer">
				<Icon src={Bars3} theme="solid" />
			</button>
			<!-- Logo -->
			<!-- <a class="lg:!ml-0 w-12 lg:w-16 overflow-hidden" href="/" title="Go to Homepage">
				<AjAlt />
			</a> -->
			<!-- Title -->
			<a href={$user?.uid ? '/' : '/'} class="flex items-center">
				<span class="hidden hover:brightness-110 xl:flex xl:gap-1 sm:text-xl md:text-3xl">
					WhiskerWord
				</span>
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if $user?.uid}
			<button
				class="btn hover:variant-soft-primary"
				aria-label="Popup Showing Theme Options"
				use:popup={{
					event: 'click',
					target: 'theme',
					placement: 'bottom-end',
					middleware: { offset: { crossAxis: -20, mainAxis: 20 } }
				}}
			>
				{#if $user?.photoURL}
					<Avatar
						class="w-8 h-8 text-4xl"
						src={$user.photoURL}
						alt="User Photo"
						referrerpolicy="no-referrer"
					/>
				{:else}
					<Avatar class="w-8 h-8 text-4xl">
						<div class="text-sm">AJ</div>
					</Avatar>
				{/if}
			</button>
			<!-- popup -->
			<div data-popup="theme">
				<div class="flex flex-col gap-4 p-4 shadow-xl card">
					<div class="mb-2 space-y-4">
						<section class="flex items-center justify-between">
							<h6>Mode</h6>
							<LightSwitch />
						</section>
					</div>
					<hr />
					<div class="flex flex-col gap-2 mt-2">
						<div class="text-sm text-ellipsis">{$user?.email}</div>
						<div class="flex gap-2">
							<a class="btn variant-ringed-primary" href="/">Home</a>
							<LogoutButton />
						</div>
					</div>
				</div>
			</div>
		{:else}
			<a class="btn variant-filled-primary" href="/login">Login</a>
		{/if}
	</svelte:fragment>
</AppBar>

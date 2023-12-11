<script lang="ts">
	import LayoutWrapper from '$lib/shared/LayoutWrapper.svelte';
	import GoogleAuth from './GoogleAuth.svelte';
	import GitHubAuth from './GitHubAuth.svelte';

	import type { PageData } from './$types';
	import EmailAuth from './EmailAuth.svelte';
	export let data: PageData;
	$: action = `?/login&redirectTo=${data.redirectTo ? data.redirectTo : '/'}`;
</script>

<LayoutWrapper>
	<section class="card flex flex-col gap-4 p-4">
		<EmailAuth {action} />
		<a href={`/signup${action.replace('/login&', '')}`}>Sign Up</a>
		<hr />

		<GoogleAuth {action} />
		<!-- <TwitterAuth /> -->
		<GitHubAuth {action} />
	</section>
</LayoutWrapper>

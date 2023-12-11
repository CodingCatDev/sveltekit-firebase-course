<script>
	import { auth } from '$lib/client/firebase';
</script>

<form method="POST" action="/login?/logout">
	<button class="btn variant-filled-primary" on:click={() => auth.signOut()}>Logout</button>
</form>

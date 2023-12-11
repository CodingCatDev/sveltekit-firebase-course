<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center p-8">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="anim-float-card absolute z-[1] w-full max-w-lg">
			<a
				class="block card card-hover p-4 space-y-2"
				href="https://twitter.com/SkeletonUI"
				target="_blank"
				rel="noreferrer"
				><div class="flex items-center gap-4">
					<figure
						class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-16 rounded-full"
						data-testid="avatar"
					>
						<img
							class="avatar-image w-full h-full object-cover"
							src="https://pbs.twimg.com/profile_images/1587479781544759297/TINbbJLC_400x400.png"
							alt=""
							style=""
						/>
					</figure>
					<div>
						<p class="font-bold">Skeleton</p>
						<small class="opacity-50">@SkeletonUI</small>
					</div>
				</div>
				<p class="whitespace-nowrap">UI toolkit for Svelte and Tailwind.</p>
				<div class="flex just gap-4">
					<small><strong>50</strong> <span class="opacity-50">Following</span></small>
					<small><strong>500</strong> <span class="opacity-50">Followers</span></small>
				</div></a
			>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>

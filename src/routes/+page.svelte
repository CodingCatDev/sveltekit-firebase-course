<script>
	import { Collection } from 'sveltefire';
</script>

<div class="container h-full mx-auto flex justify-center p-8">
	<div class="text-center flex flex-col items-center gap-8 w-full">
		<Collection ref="posts" let:data={posts}>
			{#each posts as post}
				<div class="anim-float-card w-full">
					<a class="block card card-hover p-4 space-y-2" href={post.slug}
						><div class="flex gap-4">
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
						<div class="flex flex-col">
							<h2 class="flex text-xl">{post.title}</h2>
							<p class="flex font-medium">{post.description}</p>
						</div>
					</a>
				</div>
			{/each}
		</Collection>
	</div>
</div>

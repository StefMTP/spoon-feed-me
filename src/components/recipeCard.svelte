<script>
	import { fade } from 'svelte/transition';
	export let recipe;
</script>

<a
	href={`/recipe/${recipe.id}`}
	class="p-6 my-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	transition:fade
>
	<div>
		<img src={recipe.image} alt={`recipe ${recipe.title} image`} class="w-auto" />
		<h2 class="text-2xl font-bold">{recipe.title}</h2>
	</div>
</a>

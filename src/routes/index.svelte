<script>
	import { recipes, fetchRecipes } from '../stores/recipestore';
	import RecipeCard from '../components/recipeCard.svelte';
</script>

<svelte:head>
	<title>Recipes - SvelteKit</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Demo for Recipes</h1>
<p class="text-gray-600 text-center font-semibold">
	Hungry for something delicious? Don't know what exactly you want to eat? This website was created
	for you. Every time you visit us, 10 random recipes will be waiting for you and your need for
	deliciousness.
</p>

<div class="flex justify-center mt-4">
	<button
		class="p-4 bg-yellow-500 rounded-lg uppercase font-extrabold"
		on:click={async () => {
			await fetchRecipes(10);
		}}>Reload Recipes</button>
</div>
<div class="py-4 grid gap-4 grid-cols-1 md:grid-cols-2">
	{#each $recipes as recipe}
		<RecipeCard {recipe} />
	{/each}
</div>

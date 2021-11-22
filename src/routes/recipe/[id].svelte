<script context="module">
	export const load = async ({ page }) => {
		const apiKey = '62a9bf270d174ed2b4aba95e63da33c6';
		const url = `https://api.spoonacular.com/recipes/${page.params.id}/information?apiKey=${apiKey}`;
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		});
		const recipe = await res.json();
		return { props: { recipe } };
	};
</script>

<script>
	export let recipe;
	const stars = [
		{
			id: 1,
			fill: false
		},
		{
			id: 2,
			fill: false
		},
		{
			id: 3,
			fill: false
		},
		{
			id: 4,
			fill: false
		},
		{
			id: 5,
			fill: false
		},
		{
			id: 6,
			fill: false
		},
		{
			id: 7,
			fill: false
		},
		{
			id: 8,
			fill: false
		},
		{
			id: 9,
			fill: false
		},
		{
			id: 10,
			fill: false
		}
	];
</script>

<svelte:head>
	<title>{recipe.title}</title>
</svelte:head>

<div class="grid">
	<h1 class="text-center my-8 text-6xl font-semibold">{recipe.title}</h1>
	<div class="flex justify-self-center items-center">
		Rating: {' '}
		{#each stars as star}
			<div
				class="border-2 rounded-full py-4 my-2 mx-1 w-9 {star.id <=
				Math.round(recipe.spoonacularScore / 10)
					? 'bg-yellow-300'
					: ''}"
			/>
		{/each}
	</div>
	<img src={recipe.image} class="justify-self-center w-max" alt="recipe" />
	<div class="my-2 flex justify-self-center">
		{#each recipe.dishTypes as type}
			<div class="bg-blue-300 rounded-full py-1 px-2 mx-1 font-thin">{type}</div>
		{/each}
	</div>
	<div class="text-center my-5">
		{@html recipe.summary}
	</div>
	<div class="">
		{@html recipe.instructions}
	</div>
</div>

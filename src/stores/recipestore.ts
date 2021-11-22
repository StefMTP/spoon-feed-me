import { writable } from 'svelte/store';

export const recipes = writable([]);

export const fetchRecipes = async (number: number) => {
	const apiKey = '62a9bf270d174ed2b4aba95e63da33c6';
	const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${number}`;
	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'Accept': 'application/json'
		}
	});
	const data = await res.json();
	const loadedRecipes = data.recipes;
	recipes.set(loadedRecipes);
};

fetchRecipes(10);

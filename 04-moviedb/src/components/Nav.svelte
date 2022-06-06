<script>
	import SearchMovies from '../components/SearchMovies.svelte';
</script>

<nav>
	<a href="/">Movie Database</a>
</nav>
<SearchMovies />

<style>
	nav {
		display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: center;
	}
	a {
		font-size: 1rem;
		font-weight: bold;
		font-family: Poppins;
		color: #000;
		text-decoration: none;
	}
</style>

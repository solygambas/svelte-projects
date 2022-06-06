<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
				import.meta.env.VITE_API
			}&language=en-US&page=1`
		);
		const movieDetail = await res.json();
		if (res.ok) {
			return {
				props: { movieDetail }
			};
		}
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	export let movieDetail;

	function convertTime(runtime) {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return `${hours > 0 ? hours : ''} ${
			hours > 1 ? 'hours ' : hours > 0 ? 'hour ' : ''
		}${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
	}

	function createURI(title, release) {
		return encodeURI(title + ' ' + release.substring(0, 4));
	}
</script>

<div
	class="movie-details"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<div class="img-container">
		<img
			src={movieDetail.backdrop_path
				? 'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path
				: '/noposter.png'}
			alt={movieDetail.title}
		/>
	</div>
	<div class="txt-container">
		<h1>{movieDetail.title}</h1>
		<p class="overview">{movieDetail.overview}</p>
		<p>
			{#if movieDetail.release_date}
				<span>Release date:</span>
				{movieDetail.release_date}<br />
			{/if}
			{#if movieDetail.budget > 0}
				<span>Budget:</span>
				{movieDetail.budget.toLocaleString()}<br />
			{/if}
			{#if movieDetail.vote_average > 0}
				<span>Rating:</span>
				{movieDetail.vote_average}<br />
			{/if}
			{#if movieDetail.runtime > 0}
				<span>Runtime:</span>
				{convertTime(movieDetail.runtime)}<br />
			{/if}
		</p>
		<p>
			<span
				><a
					href={`https://www.imdb.com/find?q=${createURI(
						movieDetail.title,
						movieDetail.release_date
					)}`}
					rel="noorigin noreferrer"
					target="_blank">IMDB</a
				></span
			>
			(EN) -
			<span
				><a
					href={`https://www.allocine.fr/rechercher/?q=${createURI(
						movieDetail.title,
						movieDetail.release_date
					)}`}
					rel="noorigin noreferrer"
					target="_blank">AlloCiné</a
				></span
			> (FR)
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>

<script>
	export let movie;
</script>

<div class="movie-card">
	<a sveltekit:prefetch href={'/movie/' + movie.id}>
		<img
			src={movie.poster_path
				? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
				: '/noimage.png'}
			alt={movie.title}
		/>
	</a>
	<div class="description">
		<h2>{movie.title}</h2>
		<p>
			{movie.vote_average > 0
				? `${movie.vote_average} ${movie.release_date ? '- ' : ''}`
				: ''}{movie.release_date ? movie.release_date.substring(0, 4) : ''}
		</p>
	</div>
</div>

<style>
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
	img {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	.description {
		height: 5vh;
	}
	h2 {
		font-size: 0.9rem;
	}
	p {
		font-size: 0.7rem;
	}
</style>

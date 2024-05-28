<script lang="ts">
	export let data;
	export let form;
	import { enhance } from '$app/forms';
</script>

<div class="image-container">
	{#each data.items as url, i}
		<div class="item">
			<img
				src={url}
				alt={`image-${i}`}
				style="opacity: {form && form.probs ? form.probs[i] : 1};"
			/>
			{#if form && form.probs}
				<p>{form.probs[i]}</p>
			{/if}
		</div>
	{/each}
</div>
<form method="post" use:enhance>
	<label>Insert query: <input name="query" type="text" /><button>Search</button></label>
</form>

<style lang="scss">
	.image-container {
		display: flex;
		flex-wrap: wrap;
	}
	.item p {
		text-align: center;
	}
</style>

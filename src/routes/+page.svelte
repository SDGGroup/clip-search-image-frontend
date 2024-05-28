<script lang="ts">
	export let data;
	export let form;
	import { enhance } from '$app/forms';
	function getOpacity(prob: number) {
		return prob > 0.2 ? `${prob}` : '0.2';
	}
</script>

<div class="image-container">
	{#each data.items as url, i}
		<div class="item">
			<img
				src={url}
				alt={`image-${i}`}
				style="opacity: {form && form.probs ? getOpacity(form.probs[i]) : 1};"
			/>
			{#if form && form.probs}
				<p>{form.probs[i]}</p>
			{/if}
		</div>
	{/each}
</div>
<form method="post" use:enhance>
	<label class="label"
		>Insert query: <input class="input" name="query" type="text" /><button
			type="button"
			class="variant-filled btn">Search</button
		></label
	>
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

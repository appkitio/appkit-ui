<script>
	export let label;
	export let value;

</script>

<div class="flex items-center space-x-3">
	<div
		on:click={() => {
			value = !value;
		}}
		class="relative inline-flex  h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 outline-none "
		class:bg-brand-primary={value}
		class:bg-gray-200={!value}
		role="switch"
		aria-checked="false"
		aria-labelledby="annual-billing-label"
	>
		<span
			aria-hidden="true"
			class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
			class:translate-x-5={value}
			class:translate-x-0={!value}
		/>
	</div>
	{#if label}
		<div class="text-base font-mono">
			{label}
		</div>
	{/if}
</div>

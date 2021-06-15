<script>
	export let placeholder;
	export let label;
	export let desc;
	export let hint;
	export let isInvalid;
	export let validationMessage;
	export let value;

	import Icon from "svelte-icons-pack/Icon.svelte";
	import FiAlertCircle from "svelte-icons-pack/fi/FiAlertCircle";

</script>

<label class="block">
	{#if label}
		<div class="mb-2">
			<div class="text-gray-700 font-bold text-base ">{label}</div>
			{#if desc}
				<div class="text-gray-500 font-medium text-sm">{desc}</div>
			{/if}
		</div>
	{/if}

	<input
		type="text"
		class="form-input block w-full shadow-inner rounded border border-gray-400 outline-none focus:border-blue-500 focus:ring-blue-200"
		class:border-red-500={isInvalid}
		{placeholder}
		bind:value
	/>

	{#if hint}
		<div class="text-gray-500 mt-2 font-medium text-xs">{hint}</div>
	{/if}

	{#if validationMessage}
		<div
			class="text-red-500 mt-2 font-bold text-sm flex items-center space-x-2"
		>
			<Icon src={FiAlertCircle} size="18" />
			<div class="">{validationMessage}</div>
		</div>
	{/if}
</label>

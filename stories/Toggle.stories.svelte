<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { Toggle } from "../src";
	import Root from "./Root.svelte";

</script>

<Meta
	title="UI/Toggle"
	component={Toggle}
	argTypes={{
		value: { control: "boolean", defaultValue: false, description: "value" },
		label: { control: "text", defaultValue: "", description: "Optional label" },
	}}
/>

<Template let:args>
	<Root>
		<Toggle {...args}>{args.slot}</Toggle>
	</Root>
</Template>

<Story
	name="Toggle Control"
	args={{
		value: false,
		label: "",
	}}
/>

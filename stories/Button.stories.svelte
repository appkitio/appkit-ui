<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { Button } from "../src";
	import Root from "./Root.svelte";

</script>

<Meta
	title="UI/Button"
	component={Button}
	argTypes={{
		slot: { control: "text", defaultValue: "", description: "class attribute" },
		click: {
			action: "click",
			defaultValue: "",
			description: "click event",
		},
	}}
/>

<Template let:args>
	<Root>
		<Button {...args} on:click={args.onClick}>{args.slot}</Button>
	</Root>
</Template>

<Story
	name="Button"
	args={{
		slot: "Hello, Storybook!",
	}}
/>

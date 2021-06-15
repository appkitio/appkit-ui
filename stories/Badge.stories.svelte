<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { Badge } from "../src";
	import Root from "./Root.svelte";

</script>

<Meta
	title="UI/Badge"
	component={Badge}
	argTypes={{
		slot: { control: "text", defaultValue: "", description: "class attribute" },
	}}
/>

<Template let:args>
	<Root>
		<Badge {...args}>{args.slot}</Badge>
	</Root>
</Template>

<Story
	name="Badge"
	args={{
		slot: "badge",
	}}
/>

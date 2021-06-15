<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { Input } from "../src";
	import Root from "./Root.svelte";

</script>

<Meta
	title="UI/Input"
	component={Input}
	argTypes={{
		value: { control: "text", defaultValue: "", description: "value" },
		placeholder: {
			control: "text",
			defaultValue: "",
			description: "Placeholder",
		},
		label: { control: "text", defaultValue: "", description: "label" },
		desc: { control: "text", defaultValue: "", description: "desc" },
		hint: { control: "text", defaultValue: "", description: "hint" },
		isInvalid: {
			control: "boolean",
			defaultValue: "",
			description: "isInvalid",
		},
		validationMessage: {
			control: "text",
			defaultValue: "",
			description: "validationMessage",
		},
	}}
/>

<Template let:args>
	<Root>
		<Input {...args}>{args.slot}</Input>
	</Root>
</Template>

<Story
	name="Input"
	args={{
		value: "",
		label: "Input Label",
		placeholder: "Placeholder...",
		desc: "",
		hint: "",
		isInvalid: false,
		validationMessage: "",
	}}
/>

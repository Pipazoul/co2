<script lang="ts">
	import LoginModal from "$lib/components/LoginModal.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import "../app.css";
    import { currentUser, watchUserChange, watchNoteChange, watchTaskChange, watchFoodChange} from "$lib/store";
	import { onMount } from "svelte";

    onMount(() => {
        watchUserChange();
        watchNoteChange();
        watchTaskChange();
        watchFoodChange();
    });

</script>
<html data-theme="business" lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Garden</title>
    </head>
    <body class="flex w-screen">
        <LoginModal />
        <Nav/>
        <div class="ml-12 w-full">
            <slot/>
        </div>
    </body>
</html>

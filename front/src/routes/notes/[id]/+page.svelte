<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import {markdown} from "@codemirror/lang-markdown";
    import { oneDark } from "@codemirror/theme-one-dark";
    import { page } from '$app/stores';
	import { currentNotes } from '$lib/store';
	import { onMount } from "svelte";
	import { updateNoteById } from "$lib/utils/notes";
   
    // get the id from the url
    $: id = $page.params.id;
    // get the note from the store
    $: note = $currentNotes.find(note => note.id === id);
    let value = ""

    const styles={
        "&": {
            height: "90vh",
        },
    }

    // when ready update value with note content
    onMount(() => {
        if (note) {
            value = note.content
        }
    })

    function updateNoteContent() {
        const data = {
            content: value
        }
        updateNoteById(id, data)
    }

    function updateNoteTitle(title) {
        const data = {
            title: title
        }
        updateNoteById(id, data)
        console.log("updateNoteTitle", title)
    }
    




</script>
<div class="w-8/12">
    {#if note}
    <input type="text" bind:value={note.title} on:change={updateNoteTitle(note.title)}/>
    <CodeMirror bind:value on:change={updateNoteContent} lang={markdown()} styles={styles} theme={oneDark}/>
    {/if}
    
</div>


<script lang="ts">
	import { currentNotes } from "$lib/store";
import { createNote, deleteNoteById } from "$lib/utils/notes";



</script>
<div>
    <h1 class="text-3xl font-bold">Notes</h1>
    <div>
        <button class="btn" on:click={createNote}> 📝 New Note</button>
    </div>
    {#each $currentNotes as note}
        <div class="note flex flex-row flex-wrap">
            <a href="/notes/{note.id}">
                <h2 class="font-bold">{note.title}</h2> 
            </a>
            <span class="cursor-pointer" on:click={() => { deleteNoteById(note.id) }}>🗑️</span>
        </div>

    {/each}
</div>
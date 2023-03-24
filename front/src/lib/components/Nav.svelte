<script>
    import { currentUser } from '$lib/store';
	import { logout } from '$lib/auth';
</script>

<div class="drawer-side w-3/12">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        {#if $currentUser}
        <li><a href="/">🏠 Home</a></li>
        <li><a href="/notes">📓 Notes</a></li>
        <li><a href="/time">⌛ Time Tracker</a></li>
        <li on:click={logout}><a>🚪 Logout</a></li>
    {/if}

    {#if !$currentUser}
        <li><label for="login" class="btn">Login</label></li>
    {/if}
        
    </ul>
</div>
<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faBars, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
    import { currentUser } from '$lib/store';
	import { logout } from '$lib/auth';
</script>

<div class="drawer w-3/12 absolute">
    <input id="sidenav" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content p-4">
      <!-- Page content here -->
      <label for="sidenav" class="drawer-button cursor-pointer">
        <Fa icon={faBars} />
    </label>
    </div> 
    <div class="drawer-side ">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            <label for="sidenav" class="drawer-button p-4 cursor-pointer text-right">
                <Fa icon={faChevronLeft} />
            </label>
            <!-- Sidebar content here -->
            {#if $currentUser}
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/notes">📓 Notes</a></li>
            <li><a href="/time">⌛ Time Tracker</a></li>
            <li><a href="/co2">💧 Co2</a></li>
            <li on:click={logout}><a>🚪 Logout</a></li>
        {/if}
    
        {#if !$currentUser}
            <li><label for="login" class="btn">Login</label></li>
        {/if}
            
        </ul>
    </div>
</div>


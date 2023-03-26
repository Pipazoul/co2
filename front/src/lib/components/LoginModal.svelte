<script lang="ts"> 
    import { currentUser, loginModal } from "$lib/store";
    import { login, signup } from "$lib/auth";

    let username: string;
    let password: string;
    let errorMsg: string;

    let openModal = false;

    function clickLogin() {
        errorMsg = "";
        // handle error message returned from login function
        login(username, password).then((res) => {
            if (res) {
                errorMsg = res;
                openModal = true;
            } else {
                console.log("login successful");
                openModal = false;
                
            }
        });
    }

</script>
<div class="content">
    <input type="checkbox" bind:checked={openModal} id="login" class="modal-toggle" />
    <div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">🐤 Login</h3>
        <input type="text" placeholder="Username" bind:value={username} class="input input-bordered input-primary w-full max-w-xs" />
        <input type="password" placeholder="Password" bind:value={password} class="input input-bordered input-primary w-full max-w-xs" />

        <div class="modal-action">
        <button class="btn btn-primary" on:click={clickLogin}>Login</button>
        <label for="login" class="btn">Close</label>
        </div>
    </div>
    </div>
</div>
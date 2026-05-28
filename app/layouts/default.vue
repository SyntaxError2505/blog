<template>
    <div class="header-bar">
        <div class="navbar">
            <NuxtLink class="navbar-home-link" to="/">[ Home ]</NuxtLink>
            <NuxtLink to="/blog">[ Blog ]</NuxtLink>
        </div>
        <div class="socials">
            <NuxtLink to="https://github.com/SyntaxError2505" external>[  ]</NuxtLink>
            <NuxtLink to="https://x.com/SyntaxError2505" external>[  ]</NuxtLink>
        </div>
    </div>

    <slot />
</template>

<style>
.header-bar {
    display: flex;
    background-color: #3c3836;
    padding: 5px;
    border-color: #d65d6e;
    box-shadow: 0px 0px 5px 5px #202020;
    margin: 5px;
    font-family: "Departure Mono";
}

.navbar {
    display: flex;
    justify-content: start;
}

.navbar-home-link {
    margin-right: 10px;
}

.socials {
    display: flex;
    justify-content: end;
    flex-grow: 1;
}
</style>
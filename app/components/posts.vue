<script setup>
import { pageStandardSchema } from '@nuxt/content';

    const posts = await queryCollection("blog").where("title", "NOT LIKE", "Blog").all();
</script>

<template>
    <ul>
        <li v-for="post in posts">
            <a :href=post.path>{{ post.title }}</a>
        </li>
    </ul>
</template>
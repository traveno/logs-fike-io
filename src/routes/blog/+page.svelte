<script lang="ts">

  export let data;
  const { posts } = data;
</script>

<ul>
  {#each posts as post}
  <li>
    <a href="/blog/{post.path}">{post.title}</a>
  </li>
  {/each}
</ul>
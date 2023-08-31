<script lang="ts">
  import "../app.css";

  export let title: string = "Get a time";
  export let siteName: string = "Get a time";
  export let description: string = "Refresh the page and get a random time (with timestamp)";
  export let url: string = "https://getatime.vercel.app";
  export let keywords: string = "sveltekit, svelte, sveltekit starter, sveltekit template, sveltekit typescript, sveltekit tailwindcss";
  export let color: string = "#0F172A";
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<meta name="og:title" content={title} />
<meta name="og:site_name" content={siteName} />
<meta name="og:description" content={description} />
<meta name="og:url" content={url} />
<meta name="og:type" content="website" />
<meta name="twitter:site" content="@Steellgold" />
<meta name="twitter:creator" content="@Steellgold" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="theme-color" content={color} />

<slot />
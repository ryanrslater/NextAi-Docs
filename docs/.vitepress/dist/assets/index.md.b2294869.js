import{_ as s,c as a,o as n,a as e}from"./app.d8d544ff.js";const h=JSON.parse('{"title":"NextAi","description":"","frontmatter":{},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started","link":"#getting-started","children":[{"level":3,"title":"Add API Route","slug":"add-api-route","link":"#add-api-route","children":[]},{"level":3,"title":"Frontend Hooks","slug":"frontend-hooks","link":"#frontend-hooks","children":[]},{"level":3,"title":"Authentication","slug":"authentication","link":"#authentication","children":[]}]}],"relativePath":"index.md"}'),t={name:"index.md"},l=e(`<h1 id="nextai" tabindex="-1">NextAi <a class="header-anchor" href="#nextai" aria-hidden="true">#</a></h1><p>NextAi is an open source solution to a range of AI/ML solutions.</p><p>The ultimate goal is to create seamless integrations with Nextjs and allow people to start next generation AI and ML apps faster.</p><p>Getting started is simple.</p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>This will be a simple example app using the <a href="https://platform.openai.com/docs/introduction" target="_blank" rel="noreferrer">OpenAi API</a> and you&#39;ll need to create an API Key</p><h3 id="add-api-route" tabindex="-1">Add API Route <a class="header-anchor" href="#add-api-route" aria-hidden="true">#</a></h3><p>Create a <code>[nextai].ts</code> file inside <code>pages/api/ai</code> folder, this will create a range of endpoints for you to use.</p><p>Inside this file you&#39;ll need to paste the following code</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import NextAi from &#39;nextai&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default NextAi({</span></span>
<span class="line"><span style="color:#A6ACCD;">    Providers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        OpenAi: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            apiKey: p<wbr>rocess.env.OPENAI</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>This creates a range of API endpoints for you to use, however, they will only be activated if the Provider credentials have been set up correctly.</p><h3 id="frontend-hooks" tabindex="-1">Frontend Hooks <a class="header-anchor" href="#frontend-hooks" aria-hidden="true">#</a></h3><p>The frontend libraries are built around reusable hooks which provides state such loading, error, errorMessage and success. This allows users to be able to build functional apps with less code. Each Provider will have atleast 1 hook dedicated to it, which will provide a substantial amount of what you need to get started.</p><p>The example below is for Open Ai.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {useOpenAi} from &#39;nextai&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Home() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const ai = useOpenAi(&quot;text-davinci-002&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [text, setText] = React.useState&lt;string&gt;(&quot;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [res, setRes] = React.useState(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const submitHandler = async (e: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    e.preventDefault()</span></span>
<span class="line"><span style="color:#A6ACCD;">    const data = await ai.submit(text)</span></span>
<span class="line"><span style="color:#A6ACCD;">    setRes(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;title&gt;Create Next App&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;meta name=&quot;description&quot; content=&quot;Generated by create next app&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;main&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;{ai.loading &amp;&amp; &quot;Loading&quot;}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;{res}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;{ai.errorMessage}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;form onSubmit={submitHandler}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;input onChange={(e) =&gt; setText(e.target.value)} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/main&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-hidden="true">#</a></h3><p>Authentication is simple with NextAi, all you have to do is pass the type of Auth provider, and if a user is not returned by the provider, they will not be able to access your service.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import NextAi from &#39;nextai&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default NextAi({</span></span>
<span class="line"><span style="color:#A6ACCD;">    Providers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        OpenAi: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            apiKey: p<wbr>rocess.env.OPENAI</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    Auth: &#39;NextAuth&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),p=[l];function o(i,r,c,A,d,C){return n(),a("div",null,p)}const y=s(t,[["render",o]]);export{h as __pageData,y as default};

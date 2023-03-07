import{_ as t,c as e,o as a,a as n}from"./app.d8d544ff.js";const _=JSON.parse('{"title":"NextAuth","description":"","frontmatter":{},"headers":[{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"relativePath":"auth/next-auth.md"}'),s={name:"auth/next-auth.md"},o=n(`<h1 id="nextauth" tabindex="-1">NextAuth <a class="header-anchor" href="#nextauth" aria-hidden="true">#</a></h1><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><p><a href="https://next-auth.js.org/" target="_blank" rel="noreferrer">https://next-auth.js.org/</a></p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>In order to authenticate NextAi with NextAuth, simply pass &#39;NextAuth&#39; as an option in the NextAi function</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import NextAi from &#39;nextai&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default NextAi({</span></span>
<span class="line"><span style="color:#A6ACCD;">   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    Auth: &#39;NextAuth&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>This will hit the <code>/api/auth/session route</code> and if a user is returned, the rest of the function can run, otherwise will return a <code>401</code> http code</p>`,7),i=[o];function r(l,c,p,h,u,d){return a(),e("div",null,i)}const x=t(s,[["render",r]]);export{_ as __pageData,x as default};
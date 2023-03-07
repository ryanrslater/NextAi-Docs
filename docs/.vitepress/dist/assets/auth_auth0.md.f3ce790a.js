import{_ as a,c as t,o as e,a as n}from"./app.d8d544ff.js";const A=JSON.parse('{"title":"Auth0","description":"","frontmatter":{},"headers":[{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"relativePath":"auth/auth0.md"}'),s={name:"auth/auth0.md"},o=n(`<h1 id="auth0" tabindex="-1">Auth0 <a class="header-anchor" href="#auth0" aria-hidden="true">#</a></h1><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><p><a href="https://auth0.com/docs/quickstart/webapp/nextjs/01-login" target="_blank" rel="noreferrer">https://auth0.com/docs/quickstart/webapp/nextjs/01-login</a></p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>In order to authenticate NextAi with Auth0, simply pass &#39;Auth0&#39; as an option in the NextAi function</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import NextAi from &#39;nextai&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default NextAi({</span></span>
<span class="line"><span style="color:#A6ACCD;">   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    Auth: &#39;Auth0&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>This will hit the <code>/api/auth/me route</code> and if a user is returned, the rest of the function can run, otherwise will return a <code>401</code> http code</p>`,7),i=[o];function r(c,l,p,h,u,d){return e(),t("div",null,i)}const f=a(s,[["render",r]]);export{A as __pageData,f as default};

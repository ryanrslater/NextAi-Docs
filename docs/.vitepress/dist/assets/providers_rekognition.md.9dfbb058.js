import{_ as n,c as e,o as s,a}from"./app.d8d544ff.js";const u=JSON.parse('{"title":"AWS Rekognition","description":"","frontmatter":{},"headers":[{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[]},{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]}],"relativePath":"providers/rekognition.md"}'),t={name:"providers/rekognition.md"},o=a(`<h1 id="aws-rekognition" tabindex="-1">AWS Rekognition <a class="header-anchor" href="#aws-rekognition" aria-hidden="true">#</a></h1><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><p><a href="https://docs.aws.amazon.com/rekognition/index.html" target="_blank" rel="noreferrer">https://docs.aws.amazon.com/rekognition/index.html</a></p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><p>In order to set up AWS Recognition, you&#39;ll need to create an access key id and secret access key as well as your region, then copy and paste that into the NextAi Provider. <code>/api/ai/[nextai].ts</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import NextAi from &#39;nextai&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default NextAi({</span></span>
<span class="line"><span style="color:#A6ACCD;">    Providers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        AWS: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            region: p<wbr>rocess.env.REGION,</span></span>
<span class="line"><span style="color:#A6ACCD;">            accessKeyId: p<wbr>rocess.env.ACCESSKEYID</span></span>
<span class="line"><span style="color:#A6ACCD;">            secretAccessKey: p<wbr>rocess.env.SECRETACCESSKEY</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),i=[o];function l(p,r,c,d,A,h){return s(),e("div",null,i)}const _=n(t,[["render",l]]);export{u as __pageData,_ as default};


(function(){
  const $ = (sel, el=document)=>el.querySelector(sel);
  const $$ = (sel, el=document)=>Array.from(el.querySelectorAll(sel));
  const cfg = window.PORTFOLIO;

  // Typed effect
  const typed = $("#typed");
  const words = cfg.roleWords || [];
  let wi=0, ci=0, dir=1;
  function tick(){
    const w = words[wi]||"";
    ci += dir;
    if(ci> w.length+5){ dir=-1; }
    if(ci<0){ dir=1; wi=(wi+1)%words.length; ci=0; }
    typed.textContent = w.slice(0, Math.max(0, Math.min(w.length, ci)));
  }
  setInterval(tick, 80);

  // Fill basics
  $("#name").textContent = cfg.name;
  $("#summary").textContent = cfg.summary;
  $("#location").textContent = cfg.location;
  $("#email").href = `mailto:${cfg.email}`;
  $("#email").textContent = cfg.email;
  $("#phone").textContent = cfg.phone;
  $("#github").href = cfg.github;
  $("#linkedin").href = cfg.linkedin;
  $("#resume").href = cfg.resumeUrl;

  // Highlights
  const hiC = $("#highlights");
  cfg.highlights.forEach(h=>{
    const div = document.createElement("div");
    div.className="kv card reveal";
    div.innerHTML = `<div class="k">${h.k}</div><div class="v">${h.v}</div>`;
    hiC.appendChild(div);
  });

  // Skills
  const skC = $("#skills");
  Object.entries(cfg.skills).forEach(([k,arr])=>{
    const s = document.createElement("div");
    s.className="card reveal";
    s.innerHTML = `<div class="small">${k.replace(/_/g," / ")}</div>
      <div class="skill-badges">${arr.map(x=>`<span class="badge">${x}</span>`).join("")}</div>`;
    skC.appendChild(s);
  });

  // Experience
  const exC = $("#experience");
  cfg.experience.forEach(e=>{
    const el = document.createElement("div");
    el.className="ti card reveal";
    el.innerHTML = `<div><strong>${e.role}</strong> — ${e.org}</div>
      <div class="small">${e.period}</div>
      <ul>${(e.bullets||[]).map(b=>`<li>${b}</li>`).join("")}</ul>`;
    exC.appendChild(el);
  });

  // Education
  const edC = $("#education");
  cfg.education.forEach(e=>{
    const el = document.createElement("div");
    el.className="card reveal";
    el.innerHTML = `<div><strong>${e.title}</strong></div><div class="small">${e.org} • ${e.period}</div>`;
    edC.appendChild(el);
  });

  // Certifications
  const certC = $("#certs");
  cfg.certifications.forEach(c=>{
    const link = c.link ? `<a class="badge" href="${c.link}" target="_blank" rel="noopener">Verify</a>` : "";
    const el = document.createElement("div");
    el.className="card reveal";
    el.innerHTML = `<div><strong>${c.title}</strong></div><div class="small">${c.period||""}</div>${link}`;
    certC.appendChild(el);
  });

  // Projects
  const prC = $("#projects");
  cfg.projects.forEach(p=>{
    const el = document.createElement("a");
    el.href = p.repo;
    el.target = "_blank";
    el.rel = "noopener";
    el.className = "project card reveal";
    el.innerHTML = `<h3>${p.name}</h3>
      <div class="meta">${(p.tags||[]).join(" • ")}</div>
      <p>${p.desc||""}</p>`;
    prC.appendChild(el);
  });

  // Scroll reveal
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("show"); io.unobserve(en.target); }
    });
  }, {threshold:.1});
  $$(".reveal").forEach(x=>io.observe(x));

  // Copy email
  $("#copyEmail").addEventListener("click", async ()=>{
    await navigator.clipboard.writeText(cfg.email);
    const btn = $("#copyEmail");
    const old = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(()=>btn.textContent=old,1000);
  });
})();

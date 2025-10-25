
(function(){
  const $ = (sel, el=document)=>el.querySelector(sel);
  const cfg = window.PORTFOLIO || {};

  const setText = (sel, value) => {
    const el = typeof sel === "string" ? $(sel) : sel;
    if(!el) return;
    el.textContent = value || "";
  };

  const setLink = (id, href, options={})=>{
    const el = document.getElementById(id);
    if(!el) return;
    if(!href){
      el.removeAttribute("href");
      return;
    }
    el.setAttribute("href", href);
    if(options.download){
      el.setAttribute("download", "");
    }
    if(options.blank){
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  };

  const roleWords = Array.isArray(cfg.roleWords) ? cfg.roleWords : [];
  const eyebrow = roleWords.length
    ? roleWords.join(" | ")
    : "Software Engineer";

  setText("#heroTagline", eyebrow);
  setText("#heroName", cfg.name);
  setText("#summary", cfg.summary);
  setText("#location", cfg.location);
  setText("#phone", cfg.phone);

  const email = cfg.email || "";
  const emailEl = $("#email");
  if(emailEl){
    emailEl.textContent = email;
    emailEl.href = email ? `mailto:${email}` : "#";
  }

  const rolesWrap = $("#roles");
  if(rolesWrap){
    rolesWrap.innerHTML = "";
    roleWords.forEach(word=>{
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = word;
      rolesWrap.appendChild(span);
    });
  }

  setLink("resume", cfg.resumeUrl, {download:true});
  setLink("heroResume", cfg.resumeUrl, {download:true});
  setLink("github", cfg.github, {blank:true});
  setLink("heroGithub", cfg.github, {blank:true});
  setLink("linkedin", cfg.linkedin, {blank:true});
  setLink("heroLinkedin", cfg.linkedin, {blank:true});

  const fillHighlights = ()=>{
    const hiC = $("#highlights");
    if(!hiC) return;
    hiC.innerHTML = "";
    (cfg.highlights || []).forEach(h=>{
      const card = document.createElement("div");
      card.className = "highlight-card";
      card.innerHTML = `<span class="highlight-k">${h.k || ""}</span><span class="highlight-v">${h.v || ""}</span>`;
      hiC.appendChild(card);
    });
  };

  const fillProjects = ()=>{
    const prC = $("#projects");
    if(!prC) return;
    prC.innerHTML = "";
    (cfg.projects || []).forEach(p=>{
      const card = document.createElement("a");
      card.className = "content-card project-card";
      if(p.repo){
        card.href = p.repo;
        card.target = "_blank";
        card.rel = "noopener";
      }else{
        card.classList.add("disabled");
      }
      card.innerHTML = `
        <div class="card-header">
          <h3>${p.name || ""}</h3>
          <span class="card-meta">${(p.tags || []).join(" • ")}</span>
        </div>
        <p>${p.desc || ""}</p>
      `;
      prC.appendChild(card);
    });
  };

  const fillExperience = ()=>{
    const exC = $("#experience");
    if(!exC) return;
    exC.innerHTML = "";
    (cfg.experience || []).forEach(e=>{
      const card = document.createElement("article");
      card.className = "content-card experience-card";
      const meta = [e.org, e.period].filter(Boolean).join(" • ");
      const summary = Array.isArray(e.summary)
        ? e.summary.filter(Boolean).map(line=>`<p>${line}</p>`).join("")
        : (e.summary ? `<p>${e.summary}</p>` : "");
      card.innerHTML = `
        <div class="card-header">
          <h3>${e.role || ""}</h3>
          <span class="card-meta">${meta}</span>
        </div>
        <div class="experience-summary">
          ${summary}
        </div>
      `;
      exC.appendChild(card);
    });
  };

  const fillSkills = ()=>{
    const skC = $("#skills");
    if(!skC) return;
    skC.innerHTML = "";
    Object.entries(cfg.skills || {}).forEach(([group, skills])=>{
      const card = document.createElement("div");
      card.className = "content-card skill-card";
      const title = group.replace(/_/g," / ");
      const items = (skills || []).map(s=>`<span class="badge">${s}</span>`).join("");
      card.innerHTML = `
        <div class="card-header">
          <h3>${title}</h3>
        </div>
        <div class="badge-rail">
          ${items}
        </div>
      `;
      skC.appendChild(card);
    });
  };

  const fillCertifications = ()=>{
    const certC = $("#certs");
    if(!certC) return;
    certC.innerHTML = "";
    (cfg.certifications || []).forEach(c=>{
      const card = document.createElement("div");
      card.className = "content-card cert-card";
      card.innerHTML = `
        <div class="card-header">
          <h3>${c.title || ""}</h3>
          <span class="card-meta">${c.period || ""}</span>
        </div>
        ${c.link ? `<a class="badge accent" href="${c.link}" target="_blank" rel="noopener">Verify</a>` : ""}
      `;
      certC.appendChild(card);
    });
  };

  const fillEducation = ()=>{
    const edC = $("#education");
    if(!edC) return;
    edC.innerHTML = "";
    (cfg.education || []).forEach(ed=>{
      const card = document.createElement("div");
      card.className = "content-card education-card";
      card.innerHTML = `
        <h3>${ed.title || ""}</h3>
        <span class="card-meta">${ed.org || ""}</span>
        <span class="card-meta subtle">${ed.period || ""}</span>
      `;
      edC.appendChild(card);
    });
  };

  fillHighlights();
  fillProjects();
  fillExperience();
  fillSkills();
  fillCertifications();
  fillEducation();

  const copyBtn = $("#copyEmail");
  if(copyBtn){
    copyBtn.addEventListener("click", async ()=>{
      if(!cfg.email) return;
      try{
        await navigator.clipboard.writeText(cfg.email);
        const original = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(()=>copyBtn.textContent = original, 1000);
      }catch(err){
        console.error("Failed to copy email", err);
      }
    });
  }

  setText("#year", new Date().getFullYear().toString());
  setText("#name2", cfg.name);
})();

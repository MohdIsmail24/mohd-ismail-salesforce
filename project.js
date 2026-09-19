(function(){
const root=document.getElementById('projectDetail');
const id=new URLSearchParams(location.search).get('id')||'lead-management';
const p=projects[id]||projects['lead-management'];
const images=p.images||[];
const completed=p.class==='completed';

const detail={
  'lead-management':{goal:'Manage and qualify leads in a clean CRM workspace.',configured:['Lead list view and ownership','Lead Status and Lead Source visibility','Owner = Me and Created = This Quarter filters','List-view actions for status, owner and email'],outcome:'Makes lead follow-up easier by keeping ownership, source, status and activity information visible in one place.'},
  'opportunity-pipeline':{goal:'Track sales opportunities from active stages through closed outcomes.',configured:['Opportunity records and list views','Pipeline stages and sales ownership','Account and Close Date visibility','Stage-based pipeline review'],outcome:'Creates a practical sales pipeline view for monitoring opportunities, ownership and expected close dates.'},
  'global-sales-dashboard':{goal:'Turn opportunity and sales data into a management-friendly dashboard.',configured:['Sales Pipeline by close date','Opportunities Won view','Total Open Opportunities KPI','Company Win Rate KPI and dashboard controls'],outcome:'Provides a single view for pipeline health, open value, wins and overall sales performance.'},
  'agentforce-support':{goal:'Build a support-focused Agentforce experience that can route, verify, answer and escalate.',configured:['Agent Router subagent','Service Customer Verification subagent','General FAQ subagent','Support topics and escalation path','Live Test trace and grounded responses'],outcome:'Demonstrates hands-on Agentforce Builder work and a structured support conversation flow.'},
  'sales-rep-win-rates':{goal:'Measure opportunity performance by sales representative.',configured:['Opportunity report grouped by Owner','Close Date grouping','Summary metrics and grand totals','Win-rate visualization'],outcome:'Makes rep-level performance and win-rate trends easier to review from a single Salesforce report.'},
  'big-deals-dashboard':{goal:'Make high-value opportunity stages easy to scan.',configured:['Opportunities in Stages component','Pipeline stage distribution','Opportunity record count','Dashboard refresh/edit/subscribe controls'],outcome:'Provides a focused visual view of where opportunities sit in the sales cycle.'},
  'security-model':{goal:'Design a scalable access model for multiple departments.',configured:['Role hierarchy design','Profiles and Permission Sets','Organization-Wide Defaults (OWD)','Sharing Rules and access strategy'],outcome:'The architecture is being built to demonstrate practical Salesforce security and least-privilege thinking.'},
  'service-cloud':{goal:'Build a structured case-management workflow for customer support.',configured:['Case lifecycle design','Queues and assignment','Escalation workflow','Customer-support routing'],outcome:'Planned to demonstrate how Salesforce Service Cloud can organize and route support work.'},
  'flow-automation':{goal:'Automate repetitive business processes with Salesforce Flow.',configured:['Record-triggered Flow design','Screen Flow design','Approval steps','Notifications and business rules'],outcome:'Planned to demonstrate scalable no-code automation and controlled business-process execution.'}
};

const extra={
 'lead-management':{approach:'I organized the Leads workspace around ownership, qualification status, source and time-based filtering so a sales user can quickly identify the records that need action.',concepts:'Lead object • List Views • Filters • Ownership • Status • Lead Source • Data Quality'},
 'opportunity-pipeline':{approach:'I used the Opportunity object and stage information to make pipeline records easy to review by account, owner and expected close date.',concepts:'Opportunity object • Stages • Close Date • Account • Owner • Pipeline Management'},
 'global-sales-dashboard':{approach:'I combined source report data into dashboard components so leadership can move from detailed records to high-level pipeline and performance indicators.',concepts:'Reports • Dashboard Components • KPIs • Grouping • Summaries • Sales Analytics'},
 'agentforce-support':{approach:'The agent routes the request, verifies the customer when required, answers supported FAQs and provides an escalation path when the request should move to a human.',concepts:'Agentforce Builder • Topics • Subagents • Instructions • Verification • Grounding • Escalation • Testing'},
 'sales-rep-win-rates':{approach:'I grouped opportunity results by owner and close date, then used summaries and a chart to make rep-level performance easier to compare.',concepts:'Report Builder • Grouping • Summary Fields • Charts • Opportunity Metrics • Win Rate'},
 'big-deals-dashboard':{approach:'I focused the dashboard on opportunity-stage distribution so a manager can immediately see how records are spread across the sales cycle.',concepts:'Dashboard • Opportunity Stages • Pipeline Distribution • Filters • Visualization'},
 'security-model':{approach:'The planned model starts with least privilege, then layers organization-wide defaults, role hierarchy, permission sets and sharing rules to provide only the access each department needs.',concepts:'OWD • Role Hierarchy • Profiles • Permission Sets • Sharing Rules • Field-Level Security'},
 'service-cloud':{approach:'The planned workflow follows a case from intake through assignment and escalation, with queues used to route work to the appropriate support team.',concepts:'Cases • Queues • Assignment Rules • Escalation • Service Cloud'},
 'flow-automation':{approach:'The planned automation uses record-triggered and screen flows for repeatable business actions, with approvals and notifications where human control is required.',concepts:'Flow Builder • Record-Triggered Flow • Screen Flow • Decisions • Approvals • Notifications'}
};
const x=extra[id]||extra['lead-management'];

const d=detail[id]||detail['lead-management'];

root.innerHTML=`
<section class="project-hero card">
  <div class="project-hero-copy">
    <span class="kicker">PROJECT ${p.num}</span>
    <div class="detail-title-row"><h1>${p.title}</h1><span class="badge ${completed?'completed':'progress-badge'}">${p.status}</span></div>
    <p class="project-summary"><b>Purpose:</b> ${d.goal}</p>
    <p>${p.summary}</p>
    <div class="chips">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
  </div>
  <div class="detail-orb">${completed?'☁':'◌'}<small>${completed?'SALESFORCE ORG EVIDENCE':'BUILD IN PROGRESS'}</small></div>
</section>

<section class="detail-grid">
  <div class="card detail-main">
    <div class="section-head"><div><span class="kicker">PROJECT BREAKDOWN</span><h2>What I configured</h2></div></div>
    <div class="detail-points">${d.configured.map(x=>`<div class="detail-point"><span>✓</span><p>${x}</p></div>`).join('')}</div>
    <div class="detail-explain-grid"><div class="detail-explain"><span class="kicker">IMPLEMENTATION APPROACH</span><p>${x.approach}</p></div><div class="detail-explain"><span class="kicker">ADMIN CONCEPTS</span><p>${x.concepts}</p></div></div>
    <div class="detail-outcome"><span class="kicker">BUSINESS VALUE</span><p>${d.outcome}</p></div>

    <div class="section-head evidence-heading"><div><span class="kicker">VISUAL EVIDENCE</span><h2>${images.length?'Salesforce screenshots':'Project roadmap'}</h2></div></div>
    ${images.length?`<div class="gallery">${images.map((src,i)=>`<figure class="clickable-shot"><img class="project-screenshot" src="${src}" alt="${p.title} screenshot ${i+1}"><figcaption>Salesforce Developer Edition · Screenshot ${i+1}</figcaption></figure>`).join('')}</div>`:`<div class="empty-evidence"><div>◌</div><h3>In Progress</h3><p>No screenshot has been supplied for this project yet. It remains visible as planned work and is not presented as completed implementation.</p></div>`}
  </div>

  <aside class="card detail-side">
    <div class="section-head"><div><span class="kicker">RECRUITER VIEW</span><h2>Key evidence</h2></div></div>
    <ul>${p.evidence.map(x=>`<li>✓ ${x}</li>`).join('')}</ul>
    <div class="detail-note"><b>How I would explain it</b><p>${p.notes}</p></div>
    <a class="btn primary full" href="index.html#projects">← View all projects</a>
  </aside>
</section>`;


// Full-size screenshot viewer: each project image opens independently for clear inspection.
document.querySelectorAll('.project-screenshot').forEach(img=>{
  img.addEventListener('click',()=>{
    const overlay=document.createElement('div');
    overlay.className='image-lightbox';
    overlay.innerHTML=`<button class="lightbox-close" aria-label="Close image">×</button><img src="${img.src}" alt="${img.alt}"><div class="lightbox-caption">${p.title} · Full-size Salesforce screenshot</div>`;
    document.body.appendChild(overlay);
    document.body.classList.add('lightbox-open');
    const close=()=>{overlay.remove();document.body.classList.remove('lightbox-open')};
    overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.classList.contains('lightbox-close'))close()});
    document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc)}});
  });
});

document.title=p.title+' | Mohd Ismail — Salesforce Admin Lab';
})();
